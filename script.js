function generateRow(left,right,rowNum,child) {
  if (right == "") {//名前が奇数個のとき
    //親要素のdivを取得
    var container = document.getElementById("container");

    //子要素を生成
    const newRow = document.createElement("div");
    const leftElementContainer = document.createElement("div");
    const leftNameContainer = document.createElement("div");
    const leftName = document.createTextNode(left);
    const leftbtnContainer = document.createElement("div");
    const leftbtn1 = document.createElement("input");
    const leftbtnLabel1 = document.createElement("label");
    const leftbtn2 = document.createElement("input");
    const leftbtnLabel2 = document.createElement("label");
    const leftbtn3 = document.createElement("input");
    const leftbtnLabel3 = document.createElement("label");
    const leftbtn4 = document.createElement("input");
    const leftbtnLabel4 = document.createElement("label");
    const leftlabel1 = document.createTextNode("1");
    const leftlabel2 = document.createTextNode("2");
    const leftlabel3 = document.createTextNode("3");
    const leftlabel4 = document.createTextNode("4");

    const rightElementContainer = document.createElement("div");



    //クラスをセット
    newRow.setAttribute("id", "child"+String(rowNum));
    newRow.setAttribute("class", "row mt-3");
    leftElementContainer.setAttribute("class", "col row");
    leftNameContainer.setAttribute("class", "col-3 pt-2 pb-2 bg-primary text-white rounded-start border-end");
    leftNameContainer.setAttribute("style", "width:120px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;");
    leftbtnContainer.setAttribute("class", "col-8 row btn-group");
    leftbtnContainer.setAttribute("role", "group");
    leftbtnContainer.setAttribute("aria-label", "Basic radio toggle button group");
    //i番目の人のボタンにはbtnradio(i)の固有idを持たせる
    leftIdNum = rowNum*2;
    btnName = "btnradio"+leftIdNum.toFixed();
    btn1RadioId = btnName + "-1";
    btn2RadioId = btnName + "-2";
    btn3RadioId = btnName + "-3";
    btn4RadioId = btnName + "-4";


    leftbtn1.setAttribute("type", "radio");
    leftbtn1.setAttribute("class", "btn-check");
    leftbtn1.setAttribute("name", btnName);
    leftbtn1.setAttribute("id", btn1RadioId);
    leftbtn1.setAttribute("autocomplete", "off");
    leftbtn2.setAttribute("type", "radio");
    leftbtn2.setAttribute("class", "btn-check");
    leftbtn2.setAttribute("name", btnName);
    leftbtn2.setAttribute("id", btn2RadioId);
    leftbtn2.setAttribute("autocomplete", "off");
    leftbtn3.setAttribute("type", "radio");
    leftbtn3.setAttribute("class", "btn-check");
    leftbtn3.setAttribute("name", btnName);
    leftbtn3.setAttribute("id", btn3RadioId);
    leftbtn3.setAttribute("autocomplete", "off");
    leftbtn4.setAttribute("type", "radio");
    leftbtn4.setAttribute("class", "btn-check");
    leftbtn4.setAttribute("name", btnName);
    leftbtn4.setAttribute("id", btn4RadioId);
    leftbtn4.setAttribute("autocomplete", "off");
    leftbtnLabel1.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel1.setAttribute("for",  btn1RadioId);
    leftbtnLabel2.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel2.setAttribute("for", btn2RadioId);
    leftbtnLabel3.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel3.setAttribute("for", btn3RadioId);
    leftbtnLabel4.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel4.setAttribute("for", btn4RadioId);

    rightElementContainer.setAttribute("class", "col row");


    //子要素の組立
    leftNameContainer.appendChild(leftName);
    leftbtnLabel1.appendChild(leftlabel1);
    leftbtnLabel2.appendChild(leftlabel2);
    leftbtnLabel3.appendChild(leftlabel3);
    leftbtnLabel4.appendChild(leftlabel4);
    leftbtnContainer.appendChild(leftbtn1);
    leftbtnContainer.appendChild(leftbtnLabel1);
    leftbtnContainer.appendChild(leftbtn2);
    leftbtnContainer.appendChild(leftbtnLabel2);
    leftbtnContainer.appendChild(leftbtn3);
    leftbtnContainer.appendChild(leftbtnLabel3);
    leftbtnContainer.appendChild(leftbtn4);
    leftbtnContainer.appendChild(leftbtnLabel4);
    leftElementContainer.appendChild(leftNameContainer);
    leftElementContainer.appendChild(leftbtnContainer);


    newRow.appendChild(leftElementContainer);
    newRow.appendChild(rightElementContainer);

    //子要素を差し込む場所を指定する要素の取得
    var parentDiv = document.getElementById("parent");
    var insert = document.getElementById(child);

    //親要素に差込
    parentDiv.insertBefore(newRow, insert.nextSibling);

  }else{//名前が偶数個のとき
    //親要素のdivを取得
    var container = document.getElementById("container");

    //子要素を生成
    const newRow = document.createElement("div");
    const leftElementContainer = document.createElement("div");
    const leftNameContainer = document.createElement("div");
    const leftName = document.createTextNode(left);
    const leftbtnContainer = document.createElement("div");
    const leftbtn1 = document.createElement("input");
    const leftbtnLabel1 = document.createElement("label");
    const leftbtn2 = document.createElement("input");
    const leftbtnLabel2 = document.createElement("label");
    const leftbtn3 = document.createElement("input");
    const leftbtnLabel3 = document.createElement("label");
    const leftbtn4 = document.createElement("input");
    const leftbtnLabel4 = document.createElement("label");
    const leftlabel1 = document.createTextNode("1");
    const leftlabel2 = document.createTextNode("2");
    const leftlabel3 = document.createTextNode("3");
    const leftlabel4 = document.createTextNode("4");
    const rightElementContainer = document.createElement("div");
    const rightNameContainer = document.createElement("div");
    const rightName = document.createTextNode(right);
    const rightbtnContainer = document.createElement("div");
    const rightbtn1 = document.createElement("input");
    const rightbtnLabel1 = document.createElement("label");
    const rightbtn2 = document.createElement("input");
    const rightbtnLabel2 = document.createElement("label");
    const rightbtn3 = document.createElement("input");
    const rightbtnLabel3 = document.createElement("label");
    const rightbtn4 = document.createElement("input");
    const rightbtnLabel4 = document.createElement("label");
    const rightlabel1 = document.createTextNode("1");
    const rightlabel2 = document.createTextNode("2");
    const rightlabel3 = document.createTextNode("3");
    const rightlabel4 = document.createTextNode("4");



    //クラスをセット
    newRow.setAttribute("id", "child"+String(rowNum));
    newRow.setAttribute("class", "row mt-3");
    leftElementContainer.setAttribute("class", "col row");
    leftNameContainer.setAttribute("class", "col-3 pt-2 pb-2 bg-primary text-white rounded-start border-end");
    leftNameContainer.setAttribute("style", "width:120px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;");
    leftbtnContainer.setAttribute("class", "col-8 row btn-group");
    leftbtnContainer.setAttribute("role", "group");
    leftbtnContainer.setAttribute("aria-label", "Basic radio toggle button group");
    //i番目の人のボタンにはbtnradio(i)の固有idを持たせる
    leftIdNum = rowNum*2;
    leftbtnName = "btnradio"+leftIdNum.toFixed();
    leftbtn1RadioId = leftbtnName + "-1";
    leftbtn2RadioId = leftbtnName + "-2";
    leftbtn3RadioId = leftbtnName + "-3";
    leftbtn4RadioId = leftbtnName + "-4";
    rightIdNum = rowNum*2 + 1;
    rightbtnName = "btnradio"+rightIdNum.toFixed();
    rightbtn1RadioId = rightbtnName + "-1";
    rightbtn2RadioId = rightbtnName + "-2";
    rightbtn3RadioId = rightbtnName + "-3";
    rightbtn4RadioId = rightbtnName + "-4";


    leftbtn1.setAttribute("type", "radio");
    leftbtn1.setAttribute("class", "btn-check");
    leftbtn1.setAttribute("name", leftbtnName);
    leftbtn1.setAttribute("id", leftbtn1RadioId);
    leftbtn1.setAttribute("autocomplete", "off");
    leftbtn2.setAttribute("type", "radio");
    leftbtn2.setAttribute("class", "btn-check");
    leftbtn2.setAttribute("name", leftbtnName);
    leftbtn2.setAttribute("id", leftbtn2RadioId);
    leftbtn2.setAttribute("autocomplete", "off");
    leftbtn3.setAttribute("type", "radio");
    leftbtn3.setAttribute("class", "btn-check");
    leftbtn3.setAttribute("name", leftbtnName);
    leftbtn3.setAttribute("id", leftbtn3RadioId);
    leftbtn3.setAttribute("autocomplete", "off");
    leftbtn4.setAttribute("type", "radio");
    leftbtn4.setAttribute("class", "btn-check");
    leftbtn4.setAttribute("name", leftbtnName);
    leftbtn4.setAttribute("id", leftbtn4RadioId);
    leftbtn4.setAttribute("autocomplete", "off");
    leftbtnLabel1.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel1.setAttribute("for",  leftbtn1RadioId);
    leftbtnLabel2.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel2.setAttribute("for", leftbtn2RadioId);
    leftbtnLabel3.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel3.setAttribute("for", leftbtn3RadioId);
    leftbtnLabel4.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    leftbtnLabel4.setAttribute("for", leftbtn4RadioId);


    rightElementContainer.setAttribute("class", "col row");
    rightNameContainer.setAttribute("class", "col-3 pt-2 pb-2 bg-primary text-white rounded-start border-end");
    rightNameContainer.setAttribute("style", "width:120px; white-space: nowrap; text-overflow: ellipsis; overflow: hidden;");
    rightbtnContainer.setAttribute("class", "col-8 row btn-group");
    rightbtnContainer.setAttribute("role", "group");
    rightbtnContainer.setAttribute("aria-label", "Basic radio toggle button group");
    //i番目の人のボタンにはbtnradio(i)の固有idを持たせる
    rightbtn1.setAttribute("type", "radio");
    rightbtn1.setAttribute("class", "btn-check");
    rightbtn1.setAttribute("name", rightbtnName);
    rightbtn1.setAttribute("id", rightbtn1RadioId);
    rightbtn1.setAttribute("autocomplete", "off");
    rightbtn2.setAttribute("type", "radio");
    rightbtn2.setAttribute("class", "btn-check");
    rightbtn2.setAttribute("name", rightbtnName);
    rightbtn2.setAttribute("id", rightbtn2RadioId);
    rightbtn2.setAttribute("autocomplete", "off");
    rightbtn3.setAttribute("type", "radio");
    rightbtn3.setAttribute("class", "btn-check");
    rightbtn3.setAttribute("name", rightbtnName);
    rightbtn3.setAttribute("id", rightbtn3RadioId);
    rightbtn3.setAttribute("autocomplete", "off");
    rightbtn4.setAttribute("type", "radio");
    rightbtn4.setAttribute("class", "btn-check");
    rightbtn4.setAttribute("name", rightbtnName);
    rightbtn4.setAttribute("id", rightbtn4RadioId);
    rightbtn4.setAttribute("autocomplete", "off");
    rightbtnLabel1.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    rightbtnLabel1.setAttribute("for",  rightbtn1RadioId);
    rightbtnLabel2.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    rightbtnLabel2.setAttribute("for", rightbtn2RadioId);
    rightbtnLabel3.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    rightbtnLabel3.setAttribute("for", rightbtn3RadioId);
    rightbtnLabel4.setAttribute("class", "btn btn-outline-primary  col-3 pt-2 pb-2");
    rightbtnLabel4.setAttribute("for", rightbtn4RadioId);

    //子要素の組立
    leftNameContainer.appendChild(leftName);
    leftbtnLabel1.appendChild(leftlabel1);
    leftbtnLabel2.appendChild(leftlabel2);
    leftbtnLabel3.appendChild(leftlabel3);
    leftbtnLabel4.appendChild(leftlabel4);
    leftbtnContainer.appendChild(leftbtn1);
    leftbtnContainer.appendChild(leftbtnLabel1);
    leftbtnContainer.appendChild(leftbtn2);
    leftbtnContainer.appendChild(leftbtnLabel2);
    leftbtnContainer.appendChild(leftbtn3);
    leftbtnContainer.appendChild(leftbtnLabel3);
    leftbtnContainer.appendChild(leftbtn4);
    leftbtnContainer.appendChild(leftbtnLabel4);
    leftElementContainer.appendChild(leftNameContainer);
    leftElementContainer.appendChild(leftbtnContainer);

    rightNameContainer.appendChild(rightName);
    rightbtnLabel1.appendChild(rightlabel1);
    rightbtnLabel2.appendChild(rightlabel2);
    rightbtnLabel3.appendChild(rightlabel3);
    rightbtnLabel4.appendChild(rightlabel4);
    rightbtnContainer.appendChild(rightbtn1);
    rightbtnContainer.appendChild(rightbtnLabel1);
    rightbtnContainer.appendChild(rightbtn2);
    rightbtnContainer.appendChild(rightbtnLabel2);
    rightbtnContainer.appendChild(rightbtn3);
    rightbtnContainer.appendChild(rightbtnLabel3);
    rightbtnContainer.appendChild(rightbtn4);
    rightbtnContainer.appendChild(rightbtnLabel4);
    rightElementContainer.appendChild(rightNameContainer)
    rightElementContainer.appendChild(rightbtnContainer)

    newRow.appendChild(leftElementContainer);
    newRow.appendChild(rightElementContainer);

    //子要素を差し込む場所を指定する要素の取得
    var parentDiv = document.getElementById("parent");
    var child = document.getElementById(child);

    //親要素に差込
    parentDiv.insertBefore(newRow, child.nextSibling);
  }
}

let addBtn = function() {
  const name = window.prompt("名前を入力してください", "");
  location.reload();
  if (name == null) {
    
  } else {
    const arrayLen = sessionStorage.length;
    sessionStorage.setItem(arrayLen+1,name);
    const counter = sessionStorage.length;
  }
}

let generateNames = function() {
  const counter = sessionStorage.length;
  for (let i = 1; i < counter/2 + 1; i++){

    if (i == Math.floor(counter/2 + 1)){
      if (counter/2 != 0) {

        left = i*2 - 1;
        leftName = sessionStorage.getItem(left.toFixed());

        generateRow(leftName, "", i+1, "child"+i.toFixed());

      } else {

        left = i*2 - 1;
        leftName = sessionStorage.getItem(left.toFixed());
        right = i*2
        rightName = sessionStorage.getItem(right.toFixed());
  
        childNum = i-1;
        generateRow(leftName, rightName, i, "child"+childNum.toFixed());

      }
      
    } else {
      left = i*2 - 1;
      leftName = sessionStorage.getItem(left.toFixed());
      right = i*2
      rightName = sessionStorage.getItem(right.toFixed());

      generateRow(leftName, rightName, i+1, "child"+i.toFixed());

    }

  }
}