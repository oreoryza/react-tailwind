import React from "react";
import Highlight from "../component/Highlight";

export default function Header() {
  const headNews = [
    {
      img: "https://images.tokopedia.net/img/KRMmCm/2024/3/21/007d8a06-a374-4d5f-8cd6-b35a2772d6b8.jpg",
      title:
        "Persiapan IFW 2024? Tokopedia Fashion Market x Indonesia Fashion Week Punya Kejutan Buat Kamu!",
      date: "21 March 2024",
    },
    {
      img: "https://images.tokopedia.net/img/KRMmCm/2023/8/23/de714108-8126-4458-8efc-ba57023fbf74.jpg",
      title:
        "Brand fesyen THENBLANK ciptakan peluang dalam negeri bersama Tokopedia",
      date: "21 March 2024",
    },
    {
      img: "https://images.tokopedia.net/img/KRMmCm/2023/8/21/0b782512-f8ff-49b4-8fc6-81364d662e4d.jpg",
      title:
        "Implementasi AI di Tokopedia, dari Gudang Pintar sampai Sistem Rekomendasi",
      date: "21 March 2024",
    },
    {
      img: "https://images.tokopedia.net/img/KRMmCm/2023/7/24/c88c2aa0-528a-436f-b279-2bf3df8db674.jpg",
      title:
        "CPO Tokopedia Berbagi Cara Menerapkan Data-Driven Decision Making dalam Mengembangkan Produk",
      date: "21 March 2024",
    },
  ];
  return (
    <div>
      <Highlight headNews={headNews} />
    </div>
  );
}
