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
      characterContainer.style.backgroundColor = 'rgba(184, 22, 28)';
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
      characterContainer.style.backgroundColor = 'rgba(184, 22, 28)';
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
      characterContainer.style.backgroundColor = 'rgba(184, 22, 28)';
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
    } else if (event.target.id === 'ginny-logo') {
      characterContainer.style.backgroundColor = 'rgba(184, 22, 28)';
      document.getElementById('profile-img').setAttribute('src', 'images/ginny.png');
      document.getElementById('character-name').innerText = `Ginevra Molly Weasley`;
      document.getElementById('c-domitory').innerText = 'Gryffindor';
      document.getElementById('c-birth').innerText = '1981.08.11';
      document.getElementById('c-blood').innerText = 'Pure-Blodd';
      document.getElementById('c-wand').innerText = '주목나무';
      document.getElementById('c-pet').innerText = '아널드(피그미 퍼프)';
      document.getElementById('character-detail').innerHTML = `<span>론 위즐리의 여동생이자 위즐리 가문의 막내딸.</span>
      <P>위즐리 가의 고명딸이며, 여섯이나 되는 오빠들 밑에서 치이며 자라난 탓에 성격이 다소 털털한 편이다. 오빠들 중에서는 맏이인 빌 위즐리를 가장 좋아하는 듯하다. 퍼시 위즐리는 어렸을 땐 약간 대하기 어려워 하는 듯한 모습을 보이다가 14~16세 즈음에는 쌍둥이들과 같이 퍼시를 호구 취급한다. 빌이 멀리 있는 탓에 쌍둥이 형제들과 잘 어울렸다. 프레드와 조지와 같이 성장한 탓에 "세상엔 불가능한 일이 거의 없다"라는 생각이 든다고.</P>
      <p>바로 위의 오빠이자 해리에게는 형제나 다름 없는 론과는 한 살 차이답게 현실남매 사이다. 퀴디치를 한다든가, 저주를 날린다든가, 모솔이라고 비아냥댄다든가 등 평범한 남매다운 모습을 보인다.
      여담이지만, 위즐리 집안에서 여자 형제가 없었던 탓에 론의 친구인 헤르미온느 그레인저와 자매처럼 친하게 지냈다.</p>
      <p>열 살에 호그와트로 향하는 오빠들을 배웅하기 위해 부모와 함께 킹스크로스 역에 따라갔다가 처음으로 해리를 만났다. 한 살 때 볼드모트를 무찔러 마법사 세계의 영웅이 된 해리를 만났다는 사실만으로 지니는 무척이나 감격하여 그를 계속 보고 싶어 했으나 어머니인 몰리에게 '해리는 동물원에서 구경하는 동물이 아니다.'라며 저지당했다. 해리에게 막연한 동경심을 갖고 있었던 듯하다.</p>
      <p>기본적으로 해리에게 호감을 품은 탓에 친구 여동생으로서 사이는 그럭저럭 좋았다. 비행실력이 상당히 뛰어나다. 오빠들이 자기만 빼놓고 퀴디치를 할 때, 집에 있는 빗자루로 몰래 연습했다고 한다. 이후 해리의 뒤를 이어 그리핀도르 퀴디치 팀의 수색꾼을 맡기도 했다. 졸업한 후에도 은퇴할 때까지 퀴디치 프로 선수로 활약하며 명성을 날린 바 있다.</p>
      <p>그렇게 엄청난 미인은 아니다. 숱이 많은 갈색 머리에 앞니가 조금 크다. 큰 앞니와 붕붕 뜬 헤어스타일 때문에, 아주 예쁘다고 하기엔 다소 부족한 외모였다. 꾸미면 예쁘지만 평범한 수준의 외모이다. 말포이 때문에 앞니가 엄청나게 커지는 저주에 걸렸을 때 패닉하기도 했다. 저주로 앞니가 무지막지한 크기로 자라난 것을 다시 줄이는 과정에서, 앞니를 원래보다 조금 더 작게 만들어 치아교정 효과를 봤다.
      <p>머리카락은 집안 내력대로 붉은색이고 눈은 몰리 위즐리의 갈색, 입은 프레드, 조지와 똑닮았다고 한다. 해리 재학 당시를 기준으로 후배 중에선 지니가 최고 미인인 듯하다. 위즐리 쌍둥이들이 지니는 인기가 많으니 사랑의 묘약이 필요가 없다거나 남자친구가 너무 자주 바뀌는 거 아니냐는 오빠들의 언급도 있다.</p>`;
    } else if (event.target.id === 'neville-logo') {
      characterContainer.style.backgroundColor = 'rgba(184, 22, 28)';
      document.getElementById('profile-img').setAttribute('src', 'images/neville.png');
      document.getElementById('character-name').innerText = `Neville Longbottom`;
      document.getElementById('c-domitory').innerText = 'Gryffindor';
      document.getElementById('c-birth').innerText = '1980.07.30';
      document.getElementById('c-blood').innerText = 'Pure-Blood';
      document.getElementById('c-wand').innerText = '아버지에게 물려받은 지팡이';
      document.getElementById('c-pet').innerText = '트레버 (두꺼비)';
      document.getElementById('character-detail').innerHTML = `<p>유년 시절 상당히 어리버리하고 겁이 많은 건망증이 심한 소년으로, 덜 떨어진 마법적 재능으로 인해 많은 학생들에게 놀림감이 되던 소년이다. 트레버란 이름의 두꺼비를 키우는데, 이 두꺼비가 맨날 탈출하거나 해서 잃어버린다. 당장 첫 등장했을 때에도 두꺼비를 찾고 있었다. 결국은 후에 연못으로 탈출해 영원히 잃어버렸다고 한다.</p>
      <P>명색이 순수혈통 가문인 롱보텀 집안의 아들이건만, 어렸을 땐 집안 어른들 대부분이 그에게 마법 재능이 없는 게 아닌가 의심할 정도로 마법 능력은 거의 스큅 수준의 레벨. 심지어 호그와트의 입학을 결정하는 입학 허가 책도 8년 동안 그를 호그와트로 받아들이기를 거부했다. 사실은 네빌은 태어났을 때 자신의 담요를 마법으로 잘 덮는 등의 아주 미약한 마법을 쓸 수 있었고, 입학 승인 깃펜은 이를 인식하여 호그와트 입학 명단에 이름을 쓰고 싶어했지만 책은 번번이 거부했다.</P>
      <p>부모가 모두 심신상실로 병원에서 치료를 받아야 하는 처지인지라 어린 시절부터 할머니인 오거스타 롱보텀 밑에서 자랐다. 불우한 가정사 때문에 죽음을 먹는 자를 증오했는데 벨라트릭스 레스트레인지가 아즈카반에서 탈옥했다는 뉴스를 듣고 네빌이 보인 반응을 보면, 그가 가진 증오가 드러난 것보다 크다는 걸 알 수 있다. 그리고 벨라트릭스의 탈옥부터 네빌의 마법 실력이 급격히 향상되기 시작한다. 마침내 입학 허가 책 또한 그를 인정하고 깃펜이 이름을 적도록 허락했다.</p>
      <p>그래도 굼벵이도 구르는 재주가 있다고 유독 특출한 재주를 보이는 과목이 하나 있는데, 바로 약초학으로 이 과목에서만큼은 예외적으로 좋은 성적을 거두며 교수 포모나 스프라우트의 총애를 받는다.</p>
      <p>세베루스 스네이프가 맡은 마법약에서는 안 그래도 실수투성이인데 스네이프가 심할 정도로 까대기 때문에 실수도 더 많이 하고, 이 때문에 마법약 점수가 제일 낮다. 이는 스네이프가 깐깐한 실력주의자고 네빌이 서투른 것도 있지만 그냥 스네이프가 네빌을 멸시하기 때문이다. 멸시하는 이유는 재능이 없기 때문. 심지어 스네이프는 네빌의 애완동물 트레버에게 잘못 만든 마법약을 먹여 죽게 만들려고까지 한 적이 있다. 사실 네빌이 원래 공부를 잘하는 학생은 아니었지만 스네이프가 아니었으면 더 좋은 성적을 받았을 가능성도 높다.</p>`;
    } else if (event.target.id === 'luna-logo') {
      characterContainer.style.backgroundColor = 'rgba(24, 24, 71)';
      document.getElementById('profile-img').setAttribute('src', 'images/luna.png');
      document.getElementById('character-name').innerText = `Luna Elizabeth Lovegood`;
      document.getElementById('c-domitory').innerText = 'Ravenclaw';
      document.getElementById('c-birth').innerText = '1981.02.13';
      document.getElementById('c-blood').innerText = `Pure-Blood or Half-Blood`;
      document.getElementById('character-detail').innerHTML = `<span>미친 러브굿(Loony Lovegood).</span>
      <P>동그란 얼굴에 눈에 튀어 나와 있고 더티 블론드의 소녀. 독특한 사고방식과 기괴한 스타일로 모두에게 괴짜 취급을 받고 있으며 사실 실제로도 괴짜. 요즘 말하는 4차원 소녀로, 아버지 제노필리우스 러브굿도 루나와 그다지 다르지 않은 걸 봐서는 아버지의 영향을 많이 받은 듯하다. 어머니는 루나가 9살일때 마법 실험 사고로 사망했다. 해리가 세드릭 디고리의 죽음을 목격한 것처럼, 루나도 어머니의 죽음을 목격하고 그것을 이해한 경험이 있기에 세스트럴을 볼 수 있다.</P>
      <p>굽은뿔 스노캑이나 스터비 보드먼과 같은 상당히 독특한 것들을 언급한다. 이 때문에 더 괴짜 취급을 받지만, 래번클로 소속답게 의외로 명석한 모습을 보이기도 한다. 래번클로 소속이지만, 래번클로에는 친구가 하나도 없는 데다 따돌림당하고 있다. 같은 래번클로 학생들이 루나의 신발을 없애버려 맨발로 다녀야 했으나, 본인은 별로 개의치 않는 듯하다.</p>
      <p>괴짜이긴 해도 상당히 대인배인 듯 보인다. 괴짜여도 착하고 대인배인 덕에 일단 누군가와 가까워지면 금방 친구가 되거나, 적어도 호의적으로 대한다. 성격도 상냥한 편에 속하고 해리 일행과의 우정을 소중히 여긴다.</p>
      <p>해리 포터보다 한 학년 아래이며, 가장 친한 친구는 동갑이자 같은 학년이기도 한 그리핀도르의 지니 위즐리. 패트로누스는 토끼다.</p>`;
    } else if (event.target.id === 'malfoy-logo') {
      characterContainer.style.backgroundColor = 'rgba(5, 69, 5)';
      document.getElementById('profile-img').setAttribute('src', 'images/malfoy.png');
      document.getElementById('character-name').innerText = `Draco Lucius Malfoy`;
      document.getElementById('c-domitory').innerText = 'Slytherin';
      document.getElementById('c-birth').innerText = '1980.06.05';
      document.getElementById('c-blood').innerText = `Pure-Blood`;
      document.getElementById('c-wand').innerText = '산사나무, 유니콘의 털, 10인치, 적당한 탄력성';
      document.getElementById('character-detail').innerHTML = `<span>백금발에 은회안, 창백한 피부, 날카로운 턱선을 가진 소년.</span>
      <P>별도의 이름 없이 말포이라고 부른다면 대개 드레이코 말포이를 부른다.</P>
      <p>신성한 28가문에서도 명문으로 일컬어지는 말포이 가문의 가주 루시우스 말포이와 블랙 가문의 영애 나르시사 말포이의 외아들로 태어났으며, 이름인 '드레이코(Draco)'는 대대로 별이나 별자리에서 따온 이름을 짓는 외가의 전통에 따라 용자리에서 따왔다.</p>
      <p>어머니 나르시사 말포이가 다섯번의 유산 끝에 간신히 얻은 귀한 아들이라 부모님의 관심과 사랑을 독차지하며 부유한 환경에서 부족함 없이 자랐다. 친가와 외가 둘다 신성한 28가문인데다가 마법세계에서의 위세도 높고 부유하기로 유명한 가문들이기 때문에 오직 혈통으로만 따져도 최소 다이어몬드수저.</p>
      <p>루시우스는 원래 드레이코를 덤스트랭에 입학시키려 했으나, 사랑하는 아들이 집에서 멀리 떨어지는 것을 원치 않던 나르시사로 인해 호그와트에 입학하고, 이후 아버지 수하의 아들들인 빈센트 크레이브와 그레고리 고일의 호위를 받으며 지낸다. 나르시사가 하루가 멀다하고 부엉이를 통해 케이크와 과자를 잔뜩 보내줘서 배달 시간에 드레이코의 자리는 항상 간식 꾸러미로 가득했다.</p>`;
    }
  }
});

// character container close
const characterClose = document.querySelector('#close');

characterClose.addEventListener('click', function () {
  characterContainer.style.display = 'none';
  currentCharacter = '';
});