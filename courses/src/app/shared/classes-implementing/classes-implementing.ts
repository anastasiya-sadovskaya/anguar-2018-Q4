import { CoursesListItem } from '../models/courses-list-item.model';
import { UserI } from '../models/user.model';

export class CourseItem implements CoursesListItem {
    constructor(
        public id: number,
        public name: string,
        public date: Date,
        public length: number,
        public description: string,
        public isTopRated: Boolean,
    ) { }
}

export class User implements UserI {
    constructor(
        public id: number,
        public fakeToken: string,
        public name: any,
        public login: string,
        public password: string,
    ) { }
}
