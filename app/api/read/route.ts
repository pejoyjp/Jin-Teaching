import { db } from "@/firebase";
import {  doc,  updateDoc,collection,getDocs, query, where, getDoc} from "firebase/firestore";
import { NextResponse } from "next/server";

let studentId:string


export async function POST(request: Request) {
    const res = await request.json();
    studentId = res.studentId
    console.log(studentId);
    const collectionRef = collection(db, 'materials',studentId,'material');

    try {
        const querySnapshot = await getDocs(collectionRef);
        if (querySnapshot.empty) {
          console.log('集合不存在');
          return NextResponse.error
        } else {
          console.log('集合存在');
          return NextResponse.json(res)
        }
      } catch (error) {
        console.error('判断集合是否存在时发生错误：', error);
        return NextResponse.error
      }
}

export async function GET() {
    const materials:any = []
    try{
        const querySnapshot = await getDocs(collection(db, 'materials',studentId,'material'));
        querySnapshot.forEach((doc) => {
            
            materials.push(doc.data())
        });
        return NextResponse.json(materials)
    }catch(e){
        return NextResponse.error
    }
}