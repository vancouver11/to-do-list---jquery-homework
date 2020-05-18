$(document).ready(function () {
	$('.formForDeal').find('.btn').on('click', function () {
		
		$('.deals').append(createDeal());
		$('.deals').find('.close').on('click', function () {
			$(this).parent('.deal').remove();
		});
		$('.deals').find('.done').on('click', function () {
			$(this).parent('.deal').css('background-color', '#1fd916')
			$(this).parent('.deal').find('span').css('text-decoration','line-through')
		});
	});
//Новое дело----------
	function createDeal(){
		var titleDeal = $('.formForDeal').find(".nameDeal").val();
		var descDeal = $('.formForDeal').find(".descDeal").val();
		var newDeal = [
			`<div class="deal">`,
			`<div class="innerBlockDeal"> <h3>Название</h3><span>${titleDeal}</span></div>`,
			`<div class="innerBlockDeal"><h3>Описание</h3><span>${descDeal}</span></div>`,
			`<div class="close">x</div>`,
			`<div class="done">v</div>`,
			`</div>`
		].join("");
		$('.formForDeal').find(".nameDeal").val("");
		$('.formForDeal').find(".descDeal").val("");
		return newDeal
	}
//--------------------
});