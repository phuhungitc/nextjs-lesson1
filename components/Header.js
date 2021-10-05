import React from 'react';
import Link from 'next/link';
import style from '../styles/Header.module.css';
import {
    Container,
    Row,
    Col
} from 'reactstrap';

export default function Header() {
    return (
        <div>
            <header id={style.header_site}>
                <div>
                    <Container>
                        <Row>
                            <Col md="2">
                                <Link href="/">Trang chủ</Link>
                            </Col>
                            <Col md="10">
                                <ul className={style.menu_site + ' d-flex justify-content-end list-unstyled'}>
                                    <li><Link href="/about">Giới thiệu</Link></li>
                                    <li><Link href="/post">Tin tức</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        </div>
    )
}