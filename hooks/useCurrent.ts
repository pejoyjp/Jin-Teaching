import useSWR from 'swr'
import fetcher from '@/libs/fetcher'

const useCurrent = ()=>{
    const { data, error, isLoading, mutate } = useSWR('/api/write', fetcher, {
        // 将空数组 [] 作为依赖项，阻止在渲染期间重新请求数据
        revalidateOnMount: true, // 如果需要，在组件挂载时重新验证数据
        shouldRetryOnError: false, // 如果需要，禁用错误重试
    });
    //console.log(data);
    console.log('curren');
    
    return {
        data,error,isLoading,mutate
    }
}
export default useCurrent