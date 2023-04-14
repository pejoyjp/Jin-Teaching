import { NextResponse } from 'next/server';
import { db } from "@/firebase"
import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, Firestore, updateDoc, } from "firebase/firestore";

let materialId:string = ''
let studentId:string = ''

export async function POST(request: Request) {
  const res = await request.json();

  studentId = res.studentId
  const data = {
    course:res.course,
    content:res.content,
    studentId:res.studentId
  }
  const material = await addDoc(collection(db, "materials",res.studentId,'material'),data);
  materialId = material.id
  return NextResponse.json(res)
}


export async function GET() {
  console.log(materialId);
  console.log(studentId);
  const docRef = doc(db, "materials", studentId,"material",materialId);
  try{
    await updateDoc(doc(db,"materials",studentId,'material',materialId),{materialId:materialId})
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return NextResponse.json(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      return NextResponse.error
    }
  }catch(e){
    return NextResponse.error
  }
}