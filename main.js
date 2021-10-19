const birthday = document.getElementById("content1")
const homeTown = document.getElementById("content2")
const university = document.getElementById("content3")
const favorite = document.getElementById("content4")
const hobby = document.getElementById("content5")
const music = document.getElementById("content6")

const illust1 = document.getElementById("illust1");
const illust2 = document.getElementById("illust2");
const illust3 = document.getElementById("illust3");
const illust4 = document.getElementById("illust4");
const illust5 = document.getElementById("illust5");
const illust6 = document.getElementById("illust6");


// birthday
const answer1 = document.createElement("h3")
answer1.className = "answer"

const text1 = document.createElement("p")
text1.className = "text"

const card1 = document.createElement("div")
card1.className = "card"

// 花のイラストにマウスオーバーすると文字が出てくる
illust1.onmouseover = function() {
    answer1.textContent = "2001.03.04"
    card1.append(answer1)
    text1.textContent = "現在20歳です。21世紀最初の年に生まれました。"
    card1.append(text1)
    birthday.append(card1)
}
// マウスをどかすと文字が消える
illust1.onmouseout = function() {
    card1.remove()
}

// homeTown
const answer2 = document.createElement("h3")
answer2.className = "answer"

const text2 = document.createElement("p")
text2.className = "text"

const card2 = document.createElement("div")
card2.className = "card"

illust2.onmouseover = function() {
    answer2.textContent = "愛知県豊田市"
    card2.append(answer2)
    text2.textContent = "世界のトヨタがある、クルマの街豊田に住んでいます。"
    card2.append(text2)
    homeTown.append(card2)
}

illust2.onmouseout = function() {
    card2.remove()
}

// university
const answer3 = document.createElement("h3")
answer3.className = "answer"

const text3 = document.createElement("p")
text3.className = "text"

const card3 = document.createElement("div")
card3.className = "card"

illust3.onmouseover = function() {
    answer3.textContent = "名古屋市立大学"
    card3.append(answer3)
    text3.textContent = "人文社会学部心理教育学科に所属する3年生です。"
    card3.append(text3)
    university.append(card3)
}

illust3.onmouseout = function() {
    card3.remove()
}

// favorite
const answer4 = document.createElement("h3")
answer4.className = "answer"

const text4 = document.createElement("p")
text4.className = "text"

const card4 = document.createElement("div")
card4.className = "card"

illust4.onmouseover = function() {
    answer4.textContent = "ネコ"
    card4.append(answer4)
    text4.textContent = "ネコグッズを見つけるとつい買ってしまいます。"
    card4.append(text4)
    favorite.append(card4)
}

illust4.onmouseout = function() {
    card4.remove()
}

// hobby
const answer5 = document.createElement("h3")
answer5.className = "answer"

const text5 = document.createElement("p")
text5.className = "text"

const card5 = document.createElement("div")
card5.className = "card"

illust5.onmouseover = function() {
    answer5.textContent = "マンガ・アニメ"
    card5.append(answer5)
    text5.textContent = "少年誌系が好きです。オススメは『ハイキュー‼』です。"
    card5.append(text5)
    hobby.append(card5)
}

illust5.onmouseout = function() {
    card5.remove()
}

// music
const answer6 = document.createElement("h3")
answer6.className = "answer"

const text6 = document.createElement("p")
text6.className = "text"

const card6 = document.createElement("div")
card6.className = "card"

illust6.onmouseover = function() {
    answer6.textContent = "YOASOBI"
    card6.append(answer6)
    text6.textContent = "歌詞と歌声が大好きです。イチオシの曲は『群青』です。"
    card6.append(text6)
    music.append(card6)
}

illust6.onmouseout = function() {
    card6.remove()
}

// スライド
