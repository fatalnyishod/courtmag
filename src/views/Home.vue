<template lang="pug">
	include ../tools/mixins.pug
	+b.home
		+e.wrap
			+e.post--l
				+e.post-img
					img(src="@/assets/images/post-1.jpg")
				+e.post-info
					+e.H2.post-title Российский релиз AIR Jordan 1 «Bred»
					+e.SPAN.post-section КРОССОВКИ
					+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
					+e.post-wrap
						+e.A.post-author Lorem Ipsum
						+e.SPAN.post-date 12.02.2020

		+e.wrap
			+e.post--m
				+e.post-img
					img(src="@/assets/images/post-2.jpg")
				+e.post-info
					+e.H2.post-title Вирджил заебал со своими кавычками, ну реально
					+e.SPAN.post-section КРОССОВКИ
					+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
					+e.post-wrap
						+e.A.post-author Lorem Ipsum
						+e.SPAN.post-date 12.02.2020
			+e.post--m
				+e.post-img
					img(src="@/assets/images/post-3.jpg")
				+e.post-info
					+e.H2.post-title А желтые ниче такие, на 8 марта дарить
					+e.SPAN.post-section КРОССОВКИ
					+e.P.post-text Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					+e.post-wrap
						+e.A.post-author Lorem Ipsum
						+e.SPAN.post-date 12.02.2020
		
		+e.line
			p хуле палишь?

		+e.wrap--start
			List
			+b.ASIDE.aside
				p Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32 Классический текст Lorem Ipsum, используемый с XVI века, приведён ниже. Также даны разделы 1.10.32 и 1.10.33 "de Finibus Bonorum et Malorum" Цицерона и их английский перевод, сделанный H. Rackham, 1914 год.
</template>

<script>
import List from "@/components/list/List";

export default {
  name: "Home",
  components: {
    List
  }
};
</script>
