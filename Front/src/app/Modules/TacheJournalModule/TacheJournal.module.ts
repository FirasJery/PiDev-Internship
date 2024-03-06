import { Journal } from '../JournalModule/Journal.module';

export class TacheJournal {
  idtache: number;
  descriptiontache: string;
  datetache: Date;
  valid: boolean;
  journal?: Journal;
}
