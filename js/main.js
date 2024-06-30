'use strict';

{
  function generate_table() {
    // <table> 要素と <tbody> 要素を作成
    const tbl = document.getElementById('targetTable');
    let tblBody = document.createElement('tbody');

    // 購入金額の配列生成,合計金額計算
    const purchases = generate_purchases();
    const sum = calculate_sum(purchases);
    // 合計金額の表示
    let text = `購入金額合計(a)： ${sum.toLocaleString()}円`;
    const sumText = document.getElementById('sum-text');
    sumText.textContent = text;
    // const ave = calculate_ave(purchases);
    // // 平均表示
    // let text = `平均： ${ave}円`;
    // let aveText = document.getElementById('aveText');
    // aveText.textContent = text;

    // すべてのセルを作成
    for (let i = 0; i < 10; i++) {
      // 表の行を作成
      let row = document.createElement('tr');

      // <td> 要素とテキストノードを作成し、テキストノードを
      // <td> の内容として、その <td> を表の行の末尾に追加

      // number
      let tdNum = document.createElement('td');
      let tdNumContent = document.createTextNode(`${i + 1}.`);
      tdNum.appendChild(tdNumContent);
      row.appendChild(tdNum);
      tdNum.classList.add('number');

      // name
      let tdName = document.createElement('td');
      let name = generate_name();
      let tdNameContent = document.createTextNode(`${name}`);
      tdName.appendChild(tdNameContent);
      row.appendChild(tdName);
      tdName.classList.add('name');

      // purchase
      let tdPurchase = document.createElement('td');
      let tdPurchaseContent = document.createTextNode(`${purchases[i].toLocaleString()}円`);
      tdPurchase.appendChild(tdPurchaseContent);
      row.appendChild(tdPurchase);
      tdPurchase.classList.add('purchase');
      
      // percent
      let tdPercent = document.createElement('td');
      let percent = generate_percent(sum, purchases[i]);
      let tdPercentContent = document.createTextNode(`${percent}%`);
      tdPercent.appendChild(tdPercentContent);
      row.appendChild(tdPercent);
      tdPercent.classList.add('percent');

      // // difference
      // let tdDif = document.createElement('td');
      // let dif = generate_difference(ave, purchases[i]);
      // let tdDifContent = document.createTextNode(`${dif}`);
      // tdDif.appendChild(tdDifContent);
      // // 色設定
      // if (dif.includes('＋')) {
      //   tdDif.classList.add('positive-difference');
      // } else if (dif.includes('-')) {
      //   tdDif.classList.add('negative-difference');
      // }
      // row.appendChild(tdDif);
      // tdDif.classList.add('difference');

      // 表の本体の末尾に行を追加
      tblBody.appendChild(row);
    }

    // <tbody> を <table> の中に追加
    tbl.appendChild(tblBody);
  }

  function generate_name() {
    const familynames = [
      '佐藤',
      '鈴木',
      '高橋',
      '田中',
      '渡辺',
      '伊藤',
      '山本',
      '中村',
      '小林',
      '加藤',
      '吉田',
      '山田',
      '佐々木',
      '山口',
      '松本',
      '井上',
      '木村',
      '斎藤',
      '林',
      '清水',
      '山崎',
      '阿部',
      '森',
      '池田',
      '橋本',
      '山下',
      '石井',
      '中島',
      '前田',
      '藤田',
      '後藤',
      '小川',
      '岡田',
      '長谷川',
      '石川',
      '藤井',
      '西村',
      '斉藤',
      '辻',
      '丸山',
      '大塚',
      '田村',
      '平野',
      '杉山',
      '大西',
      '菅原',
      '野村',
      '新井',
      '杉本',
      '中川',
      '福田',
      '白石',
      '石原',
      '森田',
      '原田',
      '久保',
      '岩田',
      '桜井',
      '金子',
      '三浦',
      '和田',
      '中田',
      '竹内',
      '石田',
      '松井',
      '小野',
      '菊地',
      '大野',
      '小島',
      '水野',
      '吉川',
      '山内',
      '西田',
      '北村',
      '浜田',
      '五十嵐',
      '土屋',
      '谷口',
      '村田',
      '大谷',
      '武田',
      '上田',
      '安田',
      '千葉',
      '荒木',
      '古川',
      '松尾',
      '川口',
      '中山',
      '横山',
      '西川',
      '内田',
      '川上',
      '志村',
      '小山',
      '田辺',
      '石黒',
      '大石',
      '福井',
      '平田',
      '菊池',
      '今井',
      '大村',
      '江口',
      '井口'
    ];

    const firstnames = [
      '大輔',
      '一郎',
      '健太',
      '裕太',
      '太郎',
      '康二',
      '亮介',
      '拓真',
      '直人',
      '大翔',
      '光',
      '春馬',
      '隆二',
      '智也',
      '悠斗',
      '隼人',
      '裕也',
      '純',
      '雅也',
      '将太',
      '達也',
      '陽一',
      '駿',
      '翔太',
      '貴大',
      '瑛斗',
      '一樹',
      '大和',
      '誠',
      '啓太',
      '凌',
      '健',
      '春樹',
      '慎之介',
      '航',
      '涼太',
      '誠也',
      '大雅',
      '優太',
      '諒',
      '航太',
      '大地',
      '健一',
      '大輝',
      '大志',
      '良太',
      '海翔',
      '翼',
      '悠人',
      '真',
      '康平',
      '昴',
      '和也',
      '彰人',
      '勇輝',
      '光希',
      '誉',
      '凛',
      '真央',
      '由佳',
      '裕子',
      '麻美',
      '美咲',
      '千晴',
      '彩花',
      '紗綾',
      '理絵',
      '彩',
      '美緒',
      '恵美',
      '桃子',
      '瑞希',
      '沙羅',
      '梨乃',
      '未来',
      '菜々子',
      '花音',
      '結衣',
      '百花',
      '友美',
      '詩織',
      '愛美',
      '陽子',
      '真理',
      '華',
      '美穂',
      '芽衣',
      '優奈',
      '愛子',
      '愛',
      '夏美',
      '恵',
      '千尋',
      '涼子',
      '奈々',
      '結菜',
      '夏子',
      '真紀',
      '紗良',
      '愛里',
      '亜美',
      '心美',
      '結月',
      '志乃',
      '美月',
      '陽菜',
      '由紀',
      '美桜'
    ];

    let n = Math.floor(Math.random() * familynames.length);
    let m = Math.floor(Math.random() * firstnames.length);
    let name = `${familynames[n]} ${firstnames[m]}`;
    return name;
  }

  function generate_purchases() {
    let purchases = [];

    for (let i = 0; i < 10; i++) {
      let n = Math.random();
      let minPrice;
      let maxPrice;
      const step = 1000;

      if (n < 0.1) {
        minPrice = 101000;
        maxPrice = 300000;
      } else if (n < 0.3) {
        minPrice = 31000;
        maxPrice = 100000;
      } else {
        minPrice = 0;
        maxPrice = 30000;
      }

      let purchase =
        Math.floor(Math.random() * ((maxPrice - minPrice + 1) / step)) * step +
        minPrice;
      purchases[i] = purchase;
    }
    return purchases;
  }

  function calculate_sum(purchases){
    let sum = 0;
    for (let i = 0; i < purchases.length; i++) {
      sum += purchases[i];
    }
    return sum;
  }
  
  function generate_percent(sum, purchase) {
    const prePercent = purchase/ sum * 100;
    const percent = prePercent.toFixed(2);
    return percent;
  }
  
  // function calculate_ave(purchases) {
  //   let sum = 0;
  //   for (let i = 0; i < purchases.length; i++) {
  //     sum += parseFloat(purchases[i]);
  //   }
  //   let ave = sum / purchases.length;
  //   return ave;
  // }

  // function generate_difference(ave, purchase) {
  //   let difference = parseFloat(purchase) - ave;
  //   console.log(difference);
  //   let text;
  //   if (difference > 0) {
  //     text = `＋${difference.toLocaleString()}円`;
  //   } else if (difference < 0) {
  //     text = `${difference.toLocaleString()}円`;
  //   } else {
  //     text = '±0円';
  //   }
  //   return text;
  // }

  const btn = document.getElementById('btn');

  generate_table();

  btn.addEventListener('click', () => {
    const table = document.getElementById('targetTable');

    while (table.rows.length > 1) table.deleteRow(-1);

    generate_table();
  });
}
