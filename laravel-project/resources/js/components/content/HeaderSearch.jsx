import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from '../../../../public/css/content.module.scss'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';

function HeaderSearch() {

    // 商品情報
    const [dataList,setDataList] = useState()

    // 検索候補
    const [searchResult,setSearchResult] = useState()

    // 検索候補表示判定
    const [searchDisplay,setSearchDisplay] = useState(false)

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

    const [searchInputNumber,setSearchInputNumber] = useState(0)

    const searchDisplayClick = () => {
        setSearchInputNumber(1)
        setSearchDisplay(!searchDisplay)
    }

    const displayClick = (e) => {
        if (e.target == e.currentTarget) {
            setSearchInputNumber(0)
            setSearchDisplay(!searchDisplay)
        }
    }

    const ResultPostClick = (e) => {
        const searchData = new FormData()
        searchData.append("name",e)

        axios
            .post('http://localhost:8000/api/search/store',searchData)
            .then(() => {})
            .catch((err) => {
                console.log(err)
            })
    }

    // ページ遷移時に実行
    window.onbeforeunload = function WindowBefore() {

        const searchData = new FormData()
        searchData.append("name",name)

        axios
            .post('http://localhost:8000/api/search/store',searchData)
            .then(() => {})
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <form action={`/result/${name}`}>
                { searchInputNumber == 0 ?
                    <input type="text" onChange={NameChange} onClick={searchDisplayClick} />
                    :
                    <input type="text" onChange={NameChange} />
                }
                <SearchIcon className={styles.SearchIcon} />
            </form>
            <div>
                { searchDisplay == true ?
                    <div className={styles.SearchResult}
                        onClick={(e) => {
                            displayClick(e)
                    }}>
                        { name == '' ?
                            <div className={styles.SearchDiv}>
                                { dataList?.map((item,index) =>
                                    <div onClick={() => ResultPostClick(item.name)}>
                                        { index < 6 &&
                                            <div className={styles.ItemDiv}>
                                                <a href={`/product/${item.id}`} key={index} className={styles.Link}>
                                                    <div>
                                                        { item.name }
                                                    </div>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                ) }
                            </div>
                            :
                            <div className={styles.SearchDiv}>
                                { searchResult?.map((item,index) =>
                                    <div>
                                        { index < 6 &&
                                            <div className={styles.ItemDiv}>
                                                <a href={`/product/${item.id}`} key={index} className={styles.Link}>
                                                    <div>
                                                        { item.name }
                                                    </div>
                                                </a>
                                            </div>
                                        }
                                    </div>
                                ) }
                            </div>
                        }
                    </div>
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default HeaderSearch
