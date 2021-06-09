export interface Applications {
  UploadAttachments: any;
  identifier: '';
  systemName: '';
  status: 'Draft';
  myaap: {
    id: 0;
    status: 'Draft';
    startDate: any;
    acceptTermsConditions: 'Yes';
    ApplicationInfo: {
      candidateType: '';
      applicationType: '';
      contractNumber: number;
      TradeTestCentre: '';
      OFOcode: '';
      specialisation: '';
      alternativeTitle: '';
      partQualification: number;
      SAQAID: '';
      ARPL: '';
      Reg11: '';
  }
    };
    PersonalInfo: {
      firstnames: '';
      surname: '';
      maidenName: '';
      initials: '';
      nationality: '';
      idPassportNumber: '';
      dateOfBirth: '';
      workPermitNumber: '';
      workPermitExpiryDate: '';
      gender: '';
      race: '';
      email: '';
      telephoneNumber: number;
      cellphoneNumber: number;
      addressLine1: '';
      addressLine2: '';
      postalline1: '';
      postalline2: '';
      addressSurburb: '';
      postalsurburb: '';
      addresscity: '';
      postalcity: '';
      addressprovince: '';
      postalProvince: '';
      addresscode: '';
      postalCode: '';
      sameaddrress: boolean;
      EmploymentDetails: [];
    };
    AdditionalInfo: {
      sufferMedicalDisorder: '';
      natureOfDisorder: '';
      disability: '';
      disabilityStatus: '';
      disabilityRating: '';
      haveMedicalAid: '';
      medicalaidName: '';
      optionName: '';
      mainMemberName: '';
      membershipNumber: '';
      NextOfKin: {
        nextOfkin_name: '';
        nextOfkin_surname: '';
        nextOfkin_relation: '';
        nextOfkin_contact: '';
      };

      language: [];
    };
    experinceInfor: {
      FLC: '';
      HighestQualifications: '';
      tradeExperience: '';
      MathsAndScience: '';
      workplaceInfor: [];
      knowledgeForm: [];
      practicalForm: [];
    };

    UploadAttachment: {
      IdFile: {};
      StatementFile: {};
      proofQualification: {};
      visaDocument: {};
      servicesLetter: {};
      loogBook: {};
      Contract: {};
      Matric: {};
    };
  }

