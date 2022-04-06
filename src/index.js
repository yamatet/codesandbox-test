import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  incompleteListAdd(inputText);
};

// 未完了リストから指定の要素を削除
const incompleteListDel = (deleteTarget) => {
  document.getElementById("incomplete-list").removeChild(deleteTarget);
};

// 未完了リストに指定の要素を追加
const incompleteListAdd = (text) => {
  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-area";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = text;

  // button（完了）タグ生成
  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("Click", () => {
    // 押された完了ボタンの親タグ（div）を未完了リストから削除
    incompleteListDel(compButton.parentNode);

    // 押された完了ボタンの親タグを完了リストの親タグに追加
    const addTarget = compButton.parentNode;

    // ToDo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // Button（戻す）生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("Click", () => {
      // 押された戻すボタンの親タグ（div）を完了リストから削除
      incompleteListDel(returnButton.parentNode);

      // 押された戻すボタンの親タグを未完了リストの親タグに追加
      const returnTarget = returnButton.parentNode;

      // ToDo内容テキストを取得
      const text = returnTarget.firstElementChild.innerText;
      incompleteListAdd(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    // 未完了のリストに追加
    const ui = document.getElementById("complete-list");
    ui.appendChild(addTarget);
  });

  // button（削除）タグ生成
  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("Click", () => {
    // 押された削除ボタンの親タグ（div)を未完了リストから削除
    incompleteListDel(delButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);

  // 未完了のリストに追加
  const ui = document.getElementById("incomplete-list");
  ui.appendChild(div);
};

// 追加ボタン押下時のイベント
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
