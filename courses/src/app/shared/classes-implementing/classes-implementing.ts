import { CoursesListItem } from "../models/courses-list-item.model";
import { User } from '../models/user.model';

export class CourseItem implements CoursesListItem{
    constructor(
        public id: number, 
        public title: string, 
        public date: Date, 
        public duration: number, 
        public description: string
    ){ }
}

export class SomeUser implements User{
    constructor(
        public id: number, 
        public firstName: string, 
        public lastName: string
    ){ }
}