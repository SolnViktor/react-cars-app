export interface IContractsReducer {
  data: Array<IContractItem>;
  currentContract: null | IContractItem;
  fetching: boolean;
  error: any;
}

export interface IContractItem {
  id: string;
  creditAgreementNumber: string;
  creditAgreementGroup: string;
  creditAgreementStatus: string;
  creditAgreementSubStatus: string;
  totalDebt: number;
  userId: number;
  userFullName: string;
  car: ICar;
  client: IClient;
  inspection: {
    id: string;
    carId: string;
    initialInspection: Array<IInitialInspection>;
    generalPhotos: Array<IGeneralPhotos>;
    damagedComponents: Array<IDamagedComponent>;
    followUpShortName: string;
    typeShortName: string;
    datetime: string;
    videoFileId: string;
    signatureFileId: string;
    version: string;
    comment: string;
    isAbsent: string;
  };
  attachments: Array<string>;
}

interface ICar {
  id: string;
  evaluationStatus: string;
  pledgeAgreementNumber: string;
  make: string;
  model: string;
  manufactureYear: number;
  color: string;
  vin: string;
  licensePlate: string;
  enginePower: number;
  withdrawalDate: string;
  returnDate: string;
  saleDate: string;
  parkingId: string;
}

interface IClient {
  clientId: string;
  clientName: string;
  clientAddress: string;
}

interface IInitialInspection {
  parameter: string;
  chosenValue: string;
  comment: string;
}

interface IGeneralPhotos {
  fileId: string;
  viewShortName: string;
}

interface IDamagedComponent {
  component: string;
  damages: Array<string>;
  photos: Array<string>;
  comment: string;
}
