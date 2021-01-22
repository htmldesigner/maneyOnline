<template>
  <div>
    <!-- WELCOME
    ================================================== -->
    <section class="top-slider">
      <div class="container">
        <div class="row align-items-center justify-content-center flex-column">

          <div class="text-h1">
            <h1>Быстрые займы<br> До 125.000 тг</h1>
            <p class="lead">Размер переплаты ограничен национальным<br> банком Республики Казахстан согласно
              законодательства Республики Казахстан.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- FORM CALC
        ================================================== -->
    <Calculator/>

    <!-- USLOVIYA
        ================================================== -->
    <section class="usloviya">
      <div class="container">
        <div class="row align-items-center justify-content-center flex-column">

          <h2>Условия выдачи займов</h2>

          <div class="usloviya-blocks">

            <div class="block-item">
              <img src="~/assets/image/usl-img1.png"/>
              <h3 class="item_title">Возраст</h3>
              <p>От 20 до 75 лет</p>
            </div>

            <div class="block-item mt-2 d-none d-sm-block">
              <img src="~/assets/image/arrow.png"/>
            </div>

            <div class="block-item">
              <img src="~/assets/image/usl-img2.png"/>
              <h3 class="item_title">Сроки</h3>
              <p>От 10 до 30 дней</p>
            </div>

            <div class="block-item mt-2 d-none d-sm-block">
              <img src="~/assets/image/arrow.png"/>
            </div>

            <div class="block-item">
              <img src="~/assets/image/usl-img3.png"/>
              <h3 class="item_title">Сумма</h3>
              <p>От 15.000 до 100.000 тг</p>
            </div>

          </div>


        </div>
      </div>
    </section>

    <!-- ABOUT
        ================================================== -->
    <section class="about">
      <div class="container">
        <div class="row align-items-center justify-content-center flex-column">
          <div class="jumbotron">
            <div>
              <h2>О компании</h2>
              <p class="lead">ТОО "МФО" Экспресс Займ" один из лидеров на рынке микрокредитования, начал свою
                деятельность с июля 2015 года. За годы работы, мы заслужили доверие многих клиентов, большая часть из
                которых стала постоянными клиентами. Оперативное
                и качественное обслуживание, приемлемая процентная ставка, гибкие условия и индивидуальный подход к
                каждому клиенту ­ основные составляющие ТОО "МФО"Экспресс Займ".</p>
              <p class="lead">
                <nuxt-link class="btn btn-secondary btn-lg" to="/about">Подробнее</nuxt-link>
              </p>
            </div>
            <div>
              <img src="~/assets/image/about-logo.svg"/>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- NEWS
        ================================================== -->
    <section class="news">
      <div class="container">
        <div class="row align-items-center justify-content-center flex-column">

          <div class="card-deck-header">
            <h2>Новости</h2>
            <nuxt-link to="/news" exact no-prefetch>Смотреть все</nuxt-link>
          </div>

          <div class="card-deck">

            <div class="card">
              <div class="card-body">
                <p class="card-text"><small class="text-muted">18 февраля 2020</small></p>
                <a href="#">
                  <h5 class="card-title">Открыт новый кредитный центр в г. Нур-Султан</h5>
                </a>
              </div>
              <a href="#"><img class="card-img-top" src="~/assets/image/news-img.png" alt="Card image cap"></a>
            </div>

            <div class="card">
              <div class="card-body">
                <p class="card-text"><small class="text-muted">18 февраля 2020</small></p>
                <a href="#">
                  <h5 class="card-title">Открыт новый кредитный центр в г. Нур-Султан</h5>
                </a>
              </div>
              <a href="#"><img class="card-img-top" src="~/assets/image/news-img.png" alt="Card image cap"></a>
            </div>

            <div class="card">
              <div class="card-body">
                <p class="card-text"><small class="text-muted">18 февраля 2020</small></p>
                <a href="#">
                  <h5 class="card-title">Открыт новый кредитный центр в г. Нур-Султан</h5>
                </a>
              </div>
              <a href="#"><img class="card-img-top" src="~/assets/image/news-img.png" alt="Card image cap"></a>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- OTDELENIYA
        ================================================== -->
    <section class="pt-5 pb-5 pt-md-11 otdeleniya">
      <div class="container">
        <div class="row align-items-top justify-content-center flex-column">

          <div>
            <h2 class="mt-2 mb-4">
              Наши отделения
            </h2>
          </div>

          <div id="accordion">

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab1"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Караганда
                  </button>
                </h5>
              </div>
              <div id="tab1" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab2"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Алматы
                  </button>
                </h5>
              </div>
              <div id="tab2" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab3"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Нур-Султан
                  </button>
                </h5>
              </div>
              <div id="tab3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab4"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Павлодар
                  </button>
                </h5>
              </div>
              <div id="tab4" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab5"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Экибастуз
                  </button>
                </h5>
              </div>
              <div id="tab5" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#tab6"
                          aria-expanded="false" aria-controls="collapseOne">
                    г. Балхаш
                  </button>
                </h5>
              </div>
              <div id="tab6" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div><span>Пр-кт Нурсултана Назарбаева дом 12</span><span>Пн — Сб,  с 10:00 до 19:00, Обед: 14:00 — 15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 99 666 22</span></div>
                  <div><span>Мкрн. Голубые Пруды 7/5 ТД «Ескендир»</span><span>Пн — Вс, с 10:00 до 19:00, Обед: 14:00-15:00</span><span
                    class="ml-auto text-right">Тел: 8 707 241 87 04</span></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Calculator from "../components/Calculator";

  export default {
    components: {
      Calculator,
    },
    data() {
      return {
        title: 'Экспресс займы'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description1',
            name: 'description2',
            content: 'Home page description'
          }
        ]
      }
    }
  };
</script>

<style>
</style>
