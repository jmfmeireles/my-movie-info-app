import { AlertColor } from '@mui/material';
import { Subject } from 'rxjs';
export interface SubjectData {
  message: string;
  severity: AlertColor;
}

const subject = new Subject<SubjectData>();

export const messageService = {
  sendMessage: (data: SubjectData) => subject.next(data),
  getMessage: () => subject.asObservable(),
};
