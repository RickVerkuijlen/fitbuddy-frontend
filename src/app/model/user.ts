import { Gender } from '../helpers/gender'
import { Link } from '../helpers/link'

export class User {
    public name: string;
    public email: string;
    public uid: string;
    public token: string;
    public refreshToken: string;
    public picture: string;
    public gender: Gender;
    public length: number;
    public weight: number;
    public bmi: string;
    public links: Link[];
}