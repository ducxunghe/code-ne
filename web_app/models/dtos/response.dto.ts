export interface ResponseDto {
  responseStatus: number;
  statusText: string;
  timestamp: string;
  content: {
    message: string;
    datas: string;
  }
}