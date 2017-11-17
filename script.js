var $item = $('#item');
var $price = $('#item-price');
var $submit = $('.submit-button');
var $wishList = $('.wish-list');

window.onload = loadStoredWish();

$('input').on('keyup', enableSubmit);
$submit.on('click', newWish);

function enableSubmit() {
	if(($item.val() === '' && $price.val() !== '') || ($item.val() !== '' && $price.val() === '')) {
		$submit.prop('disabled', true);
	}
	else {
		$submit.prop('disabled', false);
	}
}

function clearInputs() {
	$item.val('');
	$price.val('');
	$item.focus();
	$submit.prop('disabled', true);
}

function Wish(item, price, desire, id) {
	this.item = item;
	this.price = price;
	this.desire = 'like';
	this.id = id;
}

function addToWishList(item, price, desire, id) {
	var wishObject = $(`<ul id='${id}' class="wish-item"><li>ITEM: ${item}</li>
		<li>PRICE: $${price}</li><span class="list-btns"><div class="total">Total</div>
		<div class="delete">Delete</div><div class="purchased">${desire}</div></span></ul>`)
	wishObject.prependTo($wishList);
	clearInputs();
}

function newWish(item, price, desire, id) {
	event.preventDefault();
	var id = $.now();
	var newWish = new Wish($item.val(), $price.val(), desire, id);
	storeWish($item.val(), $price.val(), desire, id);
	clearInputs();
}

function storeWish(name, cost, desire, id) {
	var wish = new Wish(name, cost, desire, id);
	var stringifiedWish = JSON.stringify(wish);
	localStorage.setItem(id, stringifiedWish);
	wishArchive(id);
}

function wishArchive(id) {
	var retrievedWish = localStorage.getItem(id);
	console.log(retrievedWish);
	var parsedWish = JSON.parse(retrievedWish);
	console.log(parsedWish);
	addToWishList(parsedWish.item, parsedWish.price, parsedWish.desire, id);
}

function loadStoredWish() {
	var wishArray = Object.keys(localStorage);
	wishArray.forEach(function(i) {
		var storedWish = localStorage.getItem(i);
		var reParseWish = JSON.parse(storedWish);
		addToWishList(reParseWish['item'], reParseWish['price'], reParseWish['desire'], reParseWish['id']);
	});
}





