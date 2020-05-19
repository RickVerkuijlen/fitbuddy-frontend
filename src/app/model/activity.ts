import { Sport } from './sport';
import { Link } from '../helpers/link';

export class Activity {
    public sport: Sport;
    public date: Date;
    public timeSportedInSeconds: number;
    public timeSported;
    public sportedKCal: number;
    public links: Link[];
}