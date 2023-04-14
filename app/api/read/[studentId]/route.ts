import { db } from "@/firebase";
import axios from "axios";
import {  doc,  updateDoc,collection,getDocs} from "firebase/firestore";
import { NextResponse } from "next/server";


let studentId:string


export async function GET(request: Request) {
    const materials:any[] = []; 
    try{
        const querySnapshot = await getDocs(collection(db, "materials",studentId,"material"));
        querySnapshot.forEach((doc) => {
            materials.push(doc.data())
        });
        return NextResponse.json(materials)
    }catch(e){
        console.log(e);
        return NextResponse.error
        
    }
}

export async function POST(request: Request) {
    const res = await request.json();
    studentId = res.studentId
    return NextResponse.json(res)
    
}

  