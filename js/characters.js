// 메뉴 이름 굵게
const currentId = document.querySelector('#characters');

currentId.style.fontWeight = "bold";

// character container hide
const characterContainer = document.querySelector('#character-container');

characterContainer.style.display = 'none';

// 인물 선택
let currentCharacter = '';

document.addEventListener('click', function selectCharacter(event) {
  if (event.target.className === 'character') {
    currentCharacter = document.querySelector(`#` + `${event.target.id}`);
    characterContainer.style.display = 'block';
    if (event.target.id === 'harry-logo') {
      document.getElementById('profile-img').setAttribute('src', 'images/harry.png');
      document.getElementById('character-name').innerText = `Harry James Potter`;
      document.getElementById('c-domitory').innerText = 'Gryffindor';
      document.getElementById('c-birth').innerText = '1980.07.31';
      document.getElementById('c-blood').innerText = 'Half-Blood';
      document.getElementById('c-wand').innerText = '서양호랑가시나무, 불사조의 깃털, 11인치, 매우 유연함';
      document.getElementById('c-pet').innerText = 'Hedwig(흰 올빼미)';
      document.getElementById('character-detail').innerHTML = `<span>살아남은 소년(The boy who lived</span>
        <p>과거 볼드모트의 악행으로부터 유일하게 생존한 인물. 일명 살아남은 아이다.
          부모는 제임스 포터와 릴리 포터, 대부는 시리우스 블랙.
          론 위즐리와는 형제 같은 친구이며 그의 부모인 아서 위즐리와 몰리 위즐리는 거의 양부모나 다름없다. 이모부와 이모에게 유년 시절 학대를 당했다.</p>
        <p>아버지인 제임스 포터와 완전히 판박이로 닮았으나 눈동자만은 초록색으로 어머니인 릴리 포터를 빼닮았다.</p>
        <span>"네가 어둠의 마법 방어술을 잘하지 못하는 척해도 아무 소용 없어. 왜냐하면 넌 잘하니까. 작년에 임페리우스 저주를 완벽하게 막아 낸 사람은 너밖에 없었어. 넌 패트로누스도 불러낼 수 있고,
          성인 마법사들도 못하는 온갖 종류의 마법들을 할 수 있잖아." - 헤르미온느 그레인저</span>
        <p>해리 포터는 용서받을 수 없는 저주 3개를 전부 한 번 이상 당하고도 살아남았다. 이 중 살인 저주는 두 번, 크루시아투스 저주는 네 번, 임페리우스 저주는 여러 번 맞았다.</p>
        <p>호그와트에 오기 전까지 본인은 전혀 몰랐지만, 볼드모트의 살인 저주에서 살아남았을 뿐 아니라 갓난아기 때 역으로 볼드모트를 몰락시켰기에 이 사실 하나만으로도 마법사 세계에서 영웅시되고 있었다.
          그래서 머글 세계에서 살던 때에도 갑자기 이상한 옷차림을 한 남자가 자기에게 반갑다며 격하게 악수를 하고 가는 등의 일을 겪었으며 해리가 살아남았다는 점은 마법사들을 넘어 도비 같은
          집요정들에게도
          희망이 되었던 듯하다. 자신은 당연히 이 일에 대해 기억하지 못하고 있으나 녹색 섬광이 번쩍이는 기억이 났다고 하는 걸 보면 그날 있었던 일을 아예 모르는 것은 아닌 듯하다. 해리는 이모 부부의
          거짓말에 의해 해그리드를 만나기 전까진 부모님이 교통사고로 죽었다고 생각했다.</p>
        <p>불우한 유년기를 보냈음에도 불구하고, 순수하고 겸손한 성격의 소유자로 아버지 제임스처럼 악의 있는 장난을 건다기보단 그냥 착하고 어른스러운 아이에 가깝다. 어릴 때부터 더즐리 부부의 학대와
          더들리
          패거리에 의한 학교폭력에 시달려온 탓에 소심하고 자신감이 없어, 자신에게 장점이 아무것도 없을 거라 생각하고 있었다. 하지만 해리 포터가 소심한 건 불우한 어린 시절을 보내서였을 뿐이고, 내면은
          용감함과 순수함이 넘치는 소년이었다. 기숙사를 배정해 주던 마법의 분류모자는 해리 포터에 대해 용기로 가득 차 있으며 올곧은 마음도 있고 타고난 재능도 뛰어난 데다 자신을 증명하고자 하는
          야망까지
          불타고 있어서 어느 한 기숙사에 배정하기가 어렵다고 고민하였다.</p>
        <p>그리핀도르에 들어간 후 자신이 사랑하는 사람들을 위해 수많은 모험을 겪으면서, 그 과정에서 겪는 시련을 망설임 없이 용감하게 이겨 낸다. 호기심이 많은 데다 결단력이 강하고, 아버지 제임스를
          닮아서인지 융통성 없는 헤르미온느나 겁 많은 론보다 규칙을 어기는 것을 마다하지 않는다. 다만 제임스처럼 남을 놀리거나 장난치는 것을 좋아하지 않고, 오히려 약자를 괴롭히는 것을 매우 싫어하는
          성격이다. 사랑받지 못한 어린 시절 때문에 친구들과 친구들의 가족을 매우 아끼는 소년이며 정이 많다. 또래 아이들에 비해 조숙하며 겸손해서 친구가 많지만 그 나이 아이들이 다 그렇듯 가끔은
          성격이
          급하고 어린애 같은 면도 있다.</p>
        <p>폴리주스에 신체의 일부를 넣었을 때의 색깔은 황금색이다.</p>`;
    } else if (event.target.id === 'ron-logo') {
      document.getElementById('profile-img').setAttribute('src', 'images/ron.png');
      document.getElementById('character-name').innerText = `Ronald Bilius Weasley`;
      document.getElementById('c-domitory').innerText = 'Gryffindor';
      document.getElementById('c-birth').innerText = '1980.03.01';
      document.getElementById('c-blood').innerText = 'Pure-Blood';
      document.getElementById('c-wand').innerText = '물푸레나무, 유니콘의 꼬리털, 12인치 / 버드나무, 유니콘의 꼬리털, 14인치';
      document.getElementById('c-pet').innerText = '스캐버스(쥐) / 피그위전(올빼미)';
      document.getElementById('character-detail').innerHTML = `<p>위즐리 일가의 6남 1녀중 막내아들이자 지니 위즐리의 오빠이다. 거의 언제나 쓰는 이름인 '론'(Ron)은 로널드(Ronald)의 애칭.</p>
      <p>헤르미온느와 함께 해리 포터의 베스트 프렌드. 위즐리가 순수혈통 태생이라 마법사 세계에 대해 아는 것이 많아 아기였을 때부터 마법사 사회와 떨어져 살았었던 해리와 머글 태생인 헤르미온느에게 둘이 몰랐던 것들을 알려주지만, 그렇기에 반대로 머글 사회에 대해 무지해서 이런 것들은 둘에게 설명을 듣는다. 백설공주나 신데렐라 이야기를 모른다.</p>
      <p>외모는 미남으로 묘사되는 편은 아니며 마르고 큰 키와 많은 주근깨, 불타는 듯한 적발이 특징. 눈동자는 파란색.</p>
      <p>성격과 능력은 모두 지극히 평범하며 형제, 친구들보다 다소 뒤떨어진다. 잘난 형제자매가 너무 많다 보니 집안에서도 그렇게 큰 기대를 받지 못하고 자랐다. 론의 부정적인 마음이 구체화되었을 때 엄마가 딸을 원했다는 언급이 나오는 걸 보면 몰리는 아기자기한 고명딸을 챙겨주는 재미가 쏠쏠했던 것 같고, 특히 지니와 터울이 적은 론이 상대적 소외감을 크게 느꼈던 것 같다. 이는 곧 본인에게 콤플렉스로 따라다녔는데 소망의 거울에 비친 모습이 엄친아였던 이유도 이 때문일 듯. 결국 이 콤플렉스는 이따금씩 론이 열폭하는 면모를 보이게 하는 주 원인으로 작용하는데, 마법사 세계에서 영웅 대접받는 단짝 해리 포터에 대한 질투로 자주 표출된다. 또 헤르미온느도 엄친딸이라 주요 3인방 중 눈에 띄는 역할을 맡거나 뛰어난 활약을 펼친 적은 없었고, 본인도 그것을 알고 있어서 스트레스를 많이 받았다.</p>
      <p>그러나 해리나 헤르미온느만큼 대단하진 못하더라도 의리가 넘치고 친구들을 위해서 자신을 희생할 줄도 알며, 자신의 잘못을 고칠 줄 아는 용감한 소년이다. 유머 감각 또한 뛰어나다. 다만 문제는 눈치가 더럽게 없다는 점인데, 분위기를 잘못 읽고 그 유머 감각을 발휘할 때가 많다. 그의 가장 뛰어난 특기는 체스 실력. 세계관 내에서 체스로는 아무도 론을 이길 수 없을 정도다. </p>
      <p>연애 감각이 매우 안 좋다. 데이트 중에 다른 여자에 대한 얘기를 하는 자신의 베프와 같은 수준. 누가 누구를 좋아하는지, 연애를 하는지 전혀 모른다. 지인, 베프, 가족은 물론 본인도 포함. 그 덕에 연애는 셋 중 제일 늦었다.</p>
      <p>원수를 눈앞에 두고도 다시 한번 생각하는 해리와는 달리 다혈질적이고 악인에게 자비 없는 모습을 보인다.</p>`;
    } else if (event.target.id === 'hermione-logo') {
      document.getElementById('profile-img').setAttribute('src', 'images/hermione.png');
      document.getElementById('character-name').innerText = `Hermione Jean Granger`;
      document.getElementById('c-domitory').innerText = 'Gryffindor';
      document.getElementById('c-birth').innerText = '1979.09.19';
      document.getElementById('c-blood').innerText = 'Muggle-Born';
      document.getElementById('c-wand').innerText = '포도나무, 용의 심근, 10¾인치';
      document.getElementById('c-pet').innerText = '크룩생스(고양이)';
      document.getElementById('character-detail').innerHTML = `<span>해리 포터의 가장 친한 친구.</span>
      <P>부모님 모두가 치과의사인 부잣집 머글 태생(Muggle-born)이다. 우수한 지능과 학구적인 태도로 미네르바 맥고나걸 교수를 포함한 많은 교수들에게 인정받는 우등생이며, 웬만한 순수혈통들보다도 마법 역사와 마법에 대해 아는 게 많아 사건 해결에 가장 근접하거나 도움을 주는 일이 많다. 다만 세베루스 스네이프 교수와 시빌 트릴로니 교수에게만큼은 인정받지 못한다. 스네이프는 헤르미온느가 시도 때도 없이 잘난 체를 한다며 학생들 앞에서 비꼬는 게 일상이며 트릴로니와는 서로 전혀 이해하지 못하고 끝내 절연한 사이다.</P>
      <p>심한 잘난 척과 융통성 없는 모범생 기질 때문에, 1학년 핼러윈 축제 전까지는 친구가 하나도 없었다. 그러나 기본적으로 배려심이 많은 성격이기 때문에 다른 학생들에게 놀림을 받는 네빌 롱보텀이나 루나 러브굿 같은 학생들과도 잘 지낸다. 수업 시간에 교수의 질문에 대답을 하는 것에 거의 강박증적인 집착을 보이며 손을 드는데, 손끝이 부들부들 떨릴 정도. 그리고 심술부리는 면이나 까칠한 면, 치사하고 고집스러운 면모도 없지 않다. 자신의 지식으로 해석이 안 되는 분야의 경우 사실이 아니라고 단정짓는 면이 있다.</p>
      <p>마법사들이 전혀 문제의식을 못 느끼고 노예로 부리는 집요정들의 해방과 권리를 적극적으로 주장하는 소수의 인물이기도 하다. 다만 이것을 타인에게 강요하거나 집요정들의 현실에 전혀 안 맞는 방법으로 해방을 주장해서 해그리드한테조차 인정받지 못했고 집요정 본인들에게까지 반감을 사는 등 좌충우돌이 좀 있었다. 자길 번번이 머드블러드라고 부르며 멸시하는 집요정 크리처를 상대로도, 해리와 론이 화를 내면 오히려 그러지 말라고 말리며 크리처를 동정하고 배려할 정도로 대인배이기도 하다.</p>
      <p>이렇듯 진보적인 가치관을 가졌으며 성실성과 지혜를 겸비하였으나 그만큼 고집스럽고 융통성이 없는 단점도 있다. 똑부러지는 성격과 대조적으로 굉장히 여리고 눈물이 많다. 겉으로는 까칠해 보이지만 감수성이 풍부하며 정이 많고 마음이 여린 편.</p>
      <p>그렇게 엄청난 미인은 아니다. 숱이 많은 갈색 머리에 앞니가 조금 크다. 큰 앞니와 붕붕 뜬 헤어스타일 때문에, 아주 예쁘다고 하기엔 다소 부족한 외모였다. 꾸미면 예쁘지만 평범한 수준의 외모이다. 말포이 때문에 앞니가 엄청나게 커지는 저주에 걸렸을 때 패닉하기도 했다. 저주로 앞니가 무지막지한 크기로 자라난 것을 다시 줄이는 과정에서, 앞니를 원래보다 조금 더 작게 만들어 치아교정 효과를 봤다.
      <p>걸어다니는 마법 백과사전이라고 해도 될 정도로 지능이 상당한 편에 속한다. 어떤 수업에서 나오는 질문이건 답을 꿰고 있으며, 주문이나 마법약 수업 등 실기 위주의 수업에서도 독보적인 실력을 뽐낸다. 게다가 헤르미온느가 머글 태생임을 고려하면 이는 더 대단해지는데, 평생 머글 부모와 살다가 호그와트 입학 편지를 받고서야 본인이 마녀임을 알게 되었음에도 불과 1달 뒤인 입학 시점에 온갖 마법 지식뿐만 아니라 마법 세계의 역사와 문화에 통달해 있었다! 1달 안에 1년치 교과목에 해당하는 무지막지한 양의 예습을 해치우지 않고서는 도무지 나올 수가 없는 수준이다. 단순히 공부만 잘하는 것도 아니라 추리력과 판단력도 상당하며, 행동력도 뛰어나다. 해리, 론과의 지속적인 교류로 행동력과 용기가 비약적으로 상승했다. 생각한 것을 바로 바로 실행에 옮기는 편으로, 특히 갑작스런 위기의 순간에 빠르게 상황 대처를 하는 능력이 있어서 해리와 론은 헤르미온느의 덕을 본 적이 꽤 있다.</p>
      <p>마법 실력은 전반적으로 뛰어난 편이나, 어둠의 마법 방어법 실력은 다른 마법에 비해 살짝 쳐진다. O.W.L.에서 다른 과목은 다 최고점인 특출남(Outstanding)을 받았는데 어둠의 마법 방어법만 바로 아래 단계인 기대 이상(Exceeds Expectations)을 받았다. 주로 교과서 위주의 학습을 선호해 온 탓인지 마법 실전에서 부족한 모습이 보인다. 적재적소에 어떤 마법을 사용해야 할지 분명히 알지만 해리포터나 론처럼 바로 마법을 사용하지 않고 머뭇거리거나 주저한다는 뜻이다 또한 신체적으로는 뛰어난 편이 아니라 비행에는 영 젬병이다. 그리고 점술은 불확실하고 불분명한 분야라서 소질도 없고 안 좋아했는데, 시빌 트릴로니 교수랑 안 맞는 것도 있어서 결국 유일하게 그만둔 과목이 되었다. 논리적이지 못한 상황에도 매우 약해서, 때로는 친구로서의 공감능력이 부족한 모습을 보이기도 한다.</p>`;
    }
  }
});

// character container close
const characterClose = document.querySelector('#close');

characterClose.addEventListener('click', function () {
  characterContainer.style.display = 'none';
  currentCharacter = '';
});