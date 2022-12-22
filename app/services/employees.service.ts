import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees:Employee[]=[
    {id:1, name:"Rani Aviv", phone:"053-3332351", email:"RaniA@companyCrm.com", seniority: "5 years",img:"./assets/img/img1.jpeg"},
    {id:2, name:"Yonatan Barak", phone:"054-2356854", email:"YonatanB@companyCrm.co.il", seniority: "3.5 years", img:"./assets/img/img2.jpeg"},
    {id:3, name:"Tamara Vais", phone:"052-8659325", email:"TamaraV@companyCrm.com", seniority: "15 years", img:"./assets/img/img3.jpeg"},
    {id:4, name:"Shemesh Frost", phone:"054-5398657", email:"ShemeshF@companyCrm.com", seniority: "1 years", img:"./assets/img/img4.jpeg"},
    {id:5, name:"Cheli Banay", phone:"053-6693521", email:"CheliB@companyCrm.com", seniority: "7 months", img:"./assets/img/img5.jpeg"},
    {id:6, name:"Elinor Shilon", phone:"053-2359684", email:"ElinorS@companyCrm.com", seniority: "3 months", img:"./assets/img/img7.jpeg"},
    {id:7, name:"Shuki Star", phone:"053-2352698", email:"ShukiS@companyCrm.com", seniority: "4.5 years", img:"./assets/img/img9.jpeg"},
    {id:8, name:"Tal Shson", phone:"055-8695326", email:"TalS@companyCrm.com", seniority: "5 years", img:"./assets/img/img6.jpeg"},
    {id:9, name:"Tzion Maymon", phone:"055-8666323", email:"TzionM@companyCrm.com", seniority: "25 years", img:"./assets/img/img8.jpeg"},
    {id:10, name:"Harel Navon", phone:"055-2595126", email:"HarelN@companyCrm.com", seniority: "35 years", img:"./assets/img/img10.jpeg"},
    {id:11, name:"Shiri Golg", phone:"053-8646328", email:"ShiriG@companyCrm.com", seniority: "12 years", img:"./assets/img/img11.png"},
    {id:12, name:"Karin Koren", phone:"055-2095196", email:"KarinK@companyCrm.com", seniority: "45 years", img:"./assets/img/img12.png"},
  ]

  constructor() { }

  getEmployees(){
    return this.employees;
  }
}
