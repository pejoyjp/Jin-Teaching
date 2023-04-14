import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useStudentId = ()=>{
    const {data,error,isLoading,mutate} = useSWR('/api/read',fetcher)
    return {
        data,error,isLoading,mutate
    }
}
export default useStudentId