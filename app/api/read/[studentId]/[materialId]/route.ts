import { db } from "@/firebase";
import {  doc, getDoc, getDocFromCache} from "firebase/firestore";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";



export async function GET(request: Request) {
    

    try{
        const url = request.url
        console.log(url);
        const materialId = url.slice(-20)
        const parts = url.split("/");
        const studentId = parts[5];
        console.log(studentId,materialId);
        
        
        const docRef = doc(db, "materials", studentId,"material",materialId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return NextResponse.json(docSnap.data())
        } else {
        // docSnap.data() will be undefined in this case
            console.log("No such document!");
            return NextResponse.error
        }
    }catch(e){
        return NextResponse.error
    }
}


// export async function POST(request: Request) {
//     const res = await request.json();
//     const studentId = res.studentId
//     const materialId = res.materialId
//     //console.log(res);
    
//     return NextResponse.json(res)
    
// }

  