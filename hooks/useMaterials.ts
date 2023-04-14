import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useMaterials = ()=>{
    const url = '/api/read/' 
    const {data,error,isLoading,mutate} = useSWR(url,fetcher)
    return {
        data,error,isLoading,mutate
    }
}
export default useMaterials

