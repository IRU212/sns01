import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../../../../public/css/content.module.scss'

function HeaderSearch() {

    const [dataList,setDataList] = useState()
    const [searchResult,setSearchResult] = useState()

    const [name,setName] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/product')
            .then((res) => {
                setDataList(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const NameChange = (e) => {

        const searchKeyword = e.target.value

        setName(searchKeyword)

        const result = dataList?.filter((item) => {
            return new RegExp(searchKeyword).test(item.name)
        })

        setSearchResult(result)
    }

    return (
        <div>
            <input type="text" onChange={NameChange} />
            <div className={styles.SearchResult}>
                { name == '' ?
                    <div>
                        { dataList?.map((item,index) =>
                            <div key={index}>
                                <div>
                                    { index < 6 &&
                                        <div>
                                            { item.name }
                                        </div>
                                    }
                                </div>
                            </div>
                        ) }
                    </div>
                    :
                    <div>
                        { searchResult?.map((item,index) =>
                            <div key={index}>
                                <div>
                                    { index < 6 &&
                                        <div>
                                            { item.name }
                                        </div>
                                    }
                                </div>
                            </div>
                        ) }
                    </div>
                }
            </div>
        </div>
    )
}

export default HeaderSearch
