
import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useMaterial = (studentId:string,materialId:string)=>{
    const { data, error, isLoading, mutate } = useSWR(`/api/read/${studentId}/${materialId}`, fetcher);
    return {
        data,error,isLoading,mutate
    }
}
export default useMaterial