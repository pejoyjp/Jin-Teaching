import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useCurrent = ()=>{
    const {data,error,isLoading,mutate} = useSWR('/api/write',fetcher)
    //console.log(data);
    
    return {
        data,error,isLoading,mutate
    }
}
export default useCurrent