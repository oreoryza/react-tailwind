import React, {useState} from 'react';
import TagTitle from '../component/TagTitle';
import NewsCard from '../component/NewsCard';

export default function BlogList() {
    const [news, setNews] = useState(
        {
            siaranPers: [
                {
                    id: 1,
                    title: "Tokopedia dan Gojek Resmi Gabung, Ini Kegiatan Pertama Mereka",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/10/6/b883a8a5-66f9-4546-a6d5-e64c697f30a7.jpg",
                    date: "23 Agustus 2023"
                },
                {
                    id: 2,
                    title: "Tokopedia Rekap Tren Belanja Online Kuartal III 2023: Transaksi Groceries Melesat",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/10/4/7595bffd-ceca-45e4-be13-c73ac8be9312.jpg",
                    date: "23 Agustus 2023"
                },
                {
                    id: 3,
                    title: "Tokopedia Luncurkan Fitur ‘Dipromosikan Affiliate’, Pengguna Makin Mudah Dapat Penghasilan Tambahan",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/9/13/5f575be0-eedd-4372-9e4d-c0ae89dd88d1.jpg",
                    date: "23 Agustus 2023"
                },
                {
                    id: 4,
                    title: "Atasi Gejala ‘Remaja Jompo’, Simak 5 Tips Hidup Sehat ala Tokopedia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/9/13/90b540b2-4439-438b-8858-72412184ae35.jpg",
                    date: "23 Agustus 2023"
                },
                {
                    id: 5,
                    title: "Bisa Jadi Ide Jualan Online, Ini Kategori Produk yang Paling Banyak Dicari di Tokopedia!",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/9/11/56e1982e-524b-42a0-95dd-5253d7e535a4.jpg",
                    date: "23 Agustus 2023"
                },
                {
                    id: 6,
                    title: "Kualitas Udara Tak Sehat? Tokopedia Bagi Cara Mengatasi Polusi Udara",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/9/11/874a6fb9-760e-4db7-bb7f-fb0fb314885b.jpg",
                    date: "23 Agustus 2023"
                },
            ],
            behindTheScenes: [
                {
                    id: 1,
                    title: "Mengenal Sosok Kartini Masa Kini: NakaBunda Tim Tokopedia Care",
                    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/04/NakaBunda-1.png",
                    date: "3 Agustus 2023"
                },
                {
                    id: 2,
                    title: "Perayaan 1 Dekade Tokopedia: Berbagi Tawa Bersama Keluarga Besar Nakama",
                    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2019/09/IMG_0464.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 3,
                    title: "Evoware: Produksi Gelas yang Bisa Dimakan untuk Mengurangi Sampah Plastik",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/8/29/e5ccdc10-fbb0-4158-9011-420702a793e6.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 4,
                    title: "Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 5,
                    title: "Rabbit Hole perkenalkan pentingnya buku untuk perkembangan anak lewat Tokopedia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/7/31/b1afcc36-5fd5-46b4-9ede-420e938a1b9f.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 6,
                    title: "Ini Cara Coffeenatics Kenalkan Kopi Indonesia ke Seluruh Nusantara Lewat Tokopedia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2023/7/3/ba34120a-7bc2-4f39-b8b2-a0d968567593.jpg",
                    date: "3 Agustus 2023"
                },
            ],
            socialImpact: [
                {
                    id: 1,
                    title: "Beraksi untuk Sesama di Tahun ke-13 Tokopedia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2022/9/15/e588a5b4-5d18-4af9-a1c0-c15f65c9498d.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 2,
                    title: "Wujudkan Komitmen Jaga Kelestarian Lingkungan, Tokopedia Tanam Ribuan Pohon Mangrove di 8 Provinsi Indonesia",
                    img: "https://images.tokopedia.net/img/KRMmCm/2022/8/24/b8fad339-c804-4db0-8df4-e3bb906f7963.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 3,
                    title: "Kontribusi Nakama untuk Lingkungan Lewat Tanam Pohon Mangrove di Program Nakamate",
                    img: "https://images.tokopedia.net/img/KRMmCm/2022/8/4/9d5f5e0d-1e40-42b7-b0ed-d9bf6528f650.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 4,
                    title: "Nakama Berbagi Inspirasi kepada Generasi Muda melalui Nakamate: School in the Cloud",
                    img: "https://images.tokopedia.net/img/KRMmCm/2022/4/8/890655e8-d1c7-4d27-8c0c-5195546d5fcf.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 5,
                    title: "Menanamkan Jiwa Kepahlawanan melalui Kegiatan Nakamate: School in the Cloud on Hero’s Day",
                    img: "https://images.tokopedia.net/img/KRMmCm/2022/4/6/f1f1ff22-ddd1-407a-be8f-9ee108e5eb2e.jpg",
                    date: "3 Agustus 2023"
                },
                {
                    id: 6,
                    title: "Nakama Tokopedia Berbagi Tips Persiapan Kuliah melalui Nakamate School in The Cloud",
                    img: "https://images.tokopedia.net/blog-tokopedia-com/uploads/2021/03/Header-scaled.jpg",
                    date: "3 Agustus 2023"
                },
            ],
        }
    )
        
  return (
    <div className='px-4 md:px-0'>
        <div className='py-5'>
            <TagTitle text="Siaran Pers" letter="Founder's Letter" milestone="Milestone" />
            <NewsCard news={news.siaranPers} tag={"Siaran Pers"}/>
        </div>
        <div className='py-5'>
            <TagTitle text="Behind The Scene"/>
            <NewsCard news={news.behindTheScenes} tag={"Behind The Scenes"}/>
        </div>
        <div className='py-5'>
            <TagTitle text="Social Impact"/>
            <NewsCard news={news.socialImpact} tag={"Social Impact"}/>
        </div>
    </div>
  )
}