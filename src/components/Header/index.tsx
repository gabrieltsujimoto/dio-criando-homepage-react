import './index.css'

export const Header = () => {
    // console.log(api)
    // const [data, setData] = useState<IAccount | null>()
    // useEffect(() => {
    //     const getData = async () => {
    //         const data: IAccount | any = await api
    //         setData(data)
    //     }
    //     getData()
    // }, [])

    // console.log(data)

    return (
        <div className='header'>
            <h1 className='header-title'>💰 DIO Bank 💰</h1>
            <p>
                {
                    /*
                    <span>
                         {data === null || data === undefined ? 'Carregando... ' : `Dados carregados: ${data.name} `}
                     </span> 
                    */
                }
            </p>
            <p className='header-subtitle'>Faça seu login agora!</p>
        </div>
    )
}