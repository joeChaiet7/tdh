import React, { useContext, useState, useEffect } from 'react';
import ModalContext from '../../../context/ModalContext';
import useGetIcon from '../../../hooks/useGetIcon';

import { 
  Loader
} from '../../'

import * as styles from './formModal.module.scss';
import './marketoOverrides.scss';

const FormModal = ({ formId, location }) => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccessful, setIsSuccessful] = useState(false);

  const {
    handleToggleModal
  } = useContext(ModalContext);

  const { handleGetIcon } = useGetIcon();

  //Load Marketo Form
	useEffect(() => {
    let cancelled = false;

		if (window.MktoForms2) {
      if(!isFormLoaded){
        window.MktoForms2.loadForm(
          '//go1.teladochealth.com',
          '138-DRH-707',
          formId,
          (form) => {
            const $form = form.getFormElem()[0];
            // if this was cancelled do not show it and remove it
            if (cancelled) {
              $form.remove();
              return;
            }
            // if not cancelled this is still valid, lets show it and update form loading status
            setIsFormLoaded(true);
          }
        )
      }

      window.MktoForms2.whenReady((form) => {  
        const submitButtonVRs = {
          showButtonIf : {
              "reasonforContactRequest" : ["Billing","Consult Support", "Credentialing", "Partnership Inquiries", "Provider Relations", "Products & Services"]
          },
          dontDisableButton : false,
          dontDisableMktoForm: false
        };

        let formEl = form.getFormElem()[0],
        submitRow = formEl.querySelector(".mktoButtonRow"),
        submitButton = submitRow.querySelector(".mktoButton");

        if(location.pathname.includes("/organizations/")){
          formEl.getElementsByTagName("select")[0].value = "Products & Services";
          formEl.getElementsByTagName("select")[0].selectedIndex = 12;
          formEl.getElementsByTagName("select")[0].dispatchEvent(new Event('change'));
        }else{
          formEl.getElementsByTagName("select")[0].selectedIndex = 0;
        }

        function manageSubmitButtonInteraction(e){
          let currentValues = form.getValues();
          
          let matchableAgnostic,
              matched;
          
          matchableAgnostic = submitButtonVRs.hideButtonIf || submitButtonVRs.showButtonIf;
          matched = Object.keys(matchableAgnostic).some(function(fieldName){
            return matchableAgnostic[fieldName].some(function(fieldValue){
                return currentValues[fieldName] === fieldValue;
            });
          });
          
          let showButton;      
    
          showButton = typeof submitButtonVRs.hideButtonIf == "object" ? !matched : matched;
          
          formEl.setAttribute("data-form-submittable", String(showButton));
          if(!submitButtonVRs.dontDisableButton){
            submitButton.disabled = !showButton;
          }

          if(!submitButtonVRs.dontDisableMktoForm){
            form.submittable(showButton);
          }
            
        }

        manageSubmitButtonInteraction();
        formEl.addEventListener("change", manageSubmitButtonInteraction);

				form.onSubmit(function () {
					setIsSubmitting(true);
					form.getFormElem().hide();
				});

				form.onSuccess(function (values, followUpUrl) {
					setIsSubmitting(false);
					setIsSuccessful(true);

					return false;
				})

				form.showErrorMessage(function (msg, elem) {
					console.error(msg)
				})
			})
    }

    return () => {
      setIsFormLoaded(false);
      cancelled = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formId]);

  return (
    <div className={styles.form}>
      <button className={styles.close} onClick={() => handleToggleModal()}>
        { handleGetIcon("close") }
      </button>
      
      <div className={styles.scrollContainer}>
     
        <div className={styles.formContainer}>
          {(!isSubmitting && !isSuccessful) && 
            <div className={styles.heading}>
              <div className={styles.title}>Interested in Virtual Care Solutions?</div>
              <p>Tell us about your organization's needs and we will get in touch promptly.</p>
            </div>
          }

          {isSubmitting &&
            <div className={styles.loading}>
              <Loader />
            </div>
          }

          {isSuccessful &&
            <div className={styles.success}>
              { handleGetIcon("circle check") }
              <div className={styles.successTitle}>Thank you for reaching out!</div>
              <p>A member of our team will review your inquiry and reach out to you at the provided email address within 3-5 business days.</p>
            </div>
          }

          <form id={`mktoForm_${formId}`} noValidate></form>
        </div>
      </div>
      
    </div>
  )
}

export default FormModal;