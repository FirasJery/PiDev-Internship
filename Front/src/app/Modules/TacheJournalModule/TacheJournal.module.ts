import { Journal } from '../JournalModule/Journal.module';

export class TacheJournal {
  idtache: number;
  descriptiontache: string;
  date_tache: Date;
  valid: boolean;
  journal?: Journal;
}
