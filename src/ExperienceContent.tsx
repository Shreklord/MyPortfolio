// import React, { useState } from "react";
import { FaTruckLoading } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";
import { FaBoxes } from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaJava } from "react-icons/fa";



function ExperienceContent(){
   

    return (
    <div className="experience_border">
    <div className="experience_row_header">
        <div>
            <h1 className="expereince_header1">Experience</h1>
        </div>
    </div>
    <div className="experience_row">
        <div className="experience_column1">
            <h2 className="experience_title2">SCLPT (Summer 2024, Intern)</h2>
            <h3 className="experience_sclpt1"><BsStack color="#67d45e"/>   Full Stack Development</h3>
            <h3 className="experience_sclpt2"><FaReact color="#67d45e"/>   React</h3>
            <h3 className="experience_sclpt3"><SiTypescript color="#67d45e"/>   TypeScript</h3>
            <h3 className="experience_sclpt4"><BiLogoPostgresql color="#67d45e"/>   Postgresql</h3>
        </div>
        <div className="experience_column2">
            
            <h2 className="experience_title3">UofSC Projects (2023-2024)</h2>
            <h3 className="experience_uofsc1"><FaJava color="#67d45e"/>  Java DataBase and Application w/ JavaFX</h3>
        </div>
        <div className="experience_column3">
            <h2 className="experience_title1">Spencers Warehouse (2020-2024)</h2>
            <h3 className="experience_spencers1"><FaTruckLoading color="#67d45e"/>   Loading Bay</h3>
            <h3 className="experience_spencers1"><FaHandPaper color="#67d45e"/>   Picker</h3>
            <h3 className="experience_spencers1"><FaBoxes color="#67d45e"/>   Back Stock</h3>
            
        </div>

    </div>
    </div>
    );
}

export default ExperienceContent;