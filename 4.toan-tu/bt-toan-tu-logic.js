// bài tập toán tử logic

// Viết chương trình tính chu vi diện tích hình tròn 
let banKinh = Number(prompt("Mời nhập bán kính hình tròn: "));
const PI = Math.PI;

console.log(typeof(banKinh));

function DienTich(){
    const S = PI*(banKinh*banKinh);
    const KQ = document.getElementById("s-hinhtron");
    KQ.innerHTML=`Diện tích hình tròn: ${S.toFixed(2)}`;
}


function ChuVi(){
    const P = 2*PI*banKinh;
    const KQ = document.getElementById('p-hinhtron');
    KQ.innerHTML=`Chu vi hình tròn: ${P.toFixed(2)}`;
}

// Viết chương trình tính diện tích và chu vi hcn

const chieuDai = Number(prompt("Mời nhập chiều dài HCN:"))
const chieuRong = Number(prompt("Mời nhập chiều rộng HCN:"))

function dienTichHCN(){
    const S = chieuDai * chieuRong;
    const KQ = document.getElementById('s-hcn');
    KQ.innerHTML = `Diện tích hình chữ nhật: ${S.toFixed(2)}`;
}

function chuViHCN(){
    const P = (chieuDai+chieuRong)*2;
    const KQ = document.getElementById('p-hcn');
    KQ.innerHTML = `Chu vi hình chữ nhật: ${P.toFixed(2)}`;
}

// Viết chương trình nhập điểm toán văn anh tính điễm trung bình làm tròn 2 chữ số
const diemToan = Number(prompt("Mời nhập điểm môn Toán"));
const diemVan = Number(prompt("Mời nhập điểm môn Văn"));
const diemAnh = Number(prompt("Mời nhập điểm môn Anh"));

function diemTB(){
    const dtb = (diemToan + diemAnh + diemVan)/3;
    const KQ = document.getElementById('dtb');
    KQ.innerHTML = `Điêm trung bình: ${dtb.toFixed(2)}`;
}

function xuat(){
    const a = document.getElementById('so_vua_nhap');
    a.innerHTML=`
    <p class="de-bai">Bán kinh: ${banKinh}</p> 
    <p class="de-bai">Chiều dài HCN: ${chieuDai}</p>
    <p class="de-bai">Chiều rộng HCN: ${chieuRong}</p>
    <p class="de-bai">Điểm Toán: ${diemToan}</p>
    <p class="de-bai">Điểm Văn: ${diemVan}</p>
    <p class="de-bai">Điểm Anh: ${diemAnh}</p>
    `;
}
xuat();