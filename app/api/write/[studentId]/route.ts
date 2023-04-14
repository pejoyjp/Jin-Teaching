import { db } from "@/firebase";
import {  addDoc, collection, doc,  setDoc,  updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const res = await request.json();
    const {content,studentId,materialId } = res
    console.log('res')
    console.log(res);
    try{
      await updateDoc(doc(db,"materials",studentId,'material',materialId),{content:content})
      return NextResponse.json(res)
    }catch(e){
      return NextResponse.error
    }
    
  }
  
  