import { CoursesListItem } from '../models/courses-list-item.model';
import { UserI } from '../models/user.model';

export class CourseItem implements CoursesListItem {
    constructor(
        public id: number,
        public title: string,
        public date: Date,
        public duration: number,
        public description: string,
        public topRated: Boolean,
    ) { }
}

export class User implements UserI {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public userName: string,
        public password: string,
    ) { }
}
