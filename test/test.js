
describe('angular-pagenav', function () {

	var $compile, $templateCache, $animate, scope, sandboxEl

	beforeEach(module('zPagenav'))

	beforeEach(inject(function (_$rootScope_, _$compile_, _$templateCache_, _$animate_) {
		scope = _$rootScope_.$new()
		sandboxEl = $('<div>').attr('id', 'sandbox').appendTo($('body'))
		$compile = _$compile_
	}))

	afterEach(function() {
		scope.$destroy()
		sandboxEl.remove()
	})

	var templates = {
		'default': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 1
				,pageSize: 10
				,total: 500
				,opts: {
					maxLinkShow: 5  //how many links to render max 
				}
			}
		}
		,'max-link-6': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 1
				,pageSize: 10
				,total: 500
				,opts: {
					maxLinkShow: 6 
				}
			}
		}

		,'page-size-25': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 1
				,pageSize: 25
				,total: 500
				,opts: {
					maxLinkShow: 6 
				}
			}
		}

		,'page-20': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 20
				,pageSize: 25
				,total: 500
				,opts: {
					maxLinkShow: 6 
				}
			}
		}

		,'total-1000': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 20
				,pageSize: 50
				,total: 1000
				,opts: {
					maxLinkShow: 6 
				}
			}
		}

		,'custom-lang': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 10
				,pageSize: 50
				,total: 1000
				,opts: {
					maxLinkShow: 6 
					,lang: {          // lang
							page: '第'
							,afterCurrentPage: '页, 共计'
							,intotal: '页'
							,Prev: '《'
							,Next: '》'
							,more:'..'
					}
				}
			}
		}

		,'custom-url': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 10
				,pageSize: 50
				,total: 1000
				,opts: {
					url: '/'
				}
			}
		}


		,'custom-pageParam': {
			element: '<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>'
			,scope: {
				page: 10
				,pageSize: 50
				,total: 1000
				,opts: {
					url: '/'
					,pageParam: 'pp'
				}
			}
		}
	}

	function compileDirective(template, locals) {
		template = templates[template]
		angular.extend(scope, angular.copy(template.scope || templates['default'].scope), locals)
		var element = $(template.element).appendTo(sandboxEl)
		element = $compile(element)(scope)

		scope.$digest()
		return jQuery(element[0])
	}

	// Tests

	describe('basic function', function () {

		it('basic', function() {
			var elm = compileDirective('default')
			expect(elm.find('a').length).to.equal(5)
		})

		//todo events

	})

	describe('options', function () {

		it('option maxLinkShow=6', function() {
			var elm = compileDirective('max-link-6')
			expect(elm.find('a').length === 6).to.equal(true)
		})

		it('option pageSize=25', function() {
			var elm = compileDirective('page-size-25')
			expect(elm.find('[data-page="20"]').length === 1).to.equal(true)
		})

		it('option page=20', function() {
			var elm = compileDirective('page-20')
			expect(elm.find('span[data-page="20"]').length === 1).to.equal(true)
		})

		it('option total=1000', function() {
			var elm = compileDirective('total-1000')
			expect(elm.find('span[data-page="20"]').length === 1).to.equal(true)
		})

		it('option total=1000', function() {
			var elm = compileDirective('total-1000')
			expect(elm.find('span[data-page="20"]').length === 1).to.equal(true)
		})

		it('option lang(custom lang)', function() {
			var elm = compileDirective('custom-lang')
			,ht = elm.html()
			expect(ht.indexOf('第') > -1).to.equal(true)
			expect(ht.indexOf('页, 共计') > -1).to.equal(true)
			expect(ht.indexOf('页') > -1).to.equal(true)
			expect(elm.find('.pagenav-link-next').text() === '》').to.equal(true)
			expect(elm.find('.pagenav-link-prev').text() === '《').to.equal(true)
		})

		it('option url="/"', function() {
			var elm = compileDirective('custom-url')
			expect(elm.find('a[data-page="1"]').prop('href').indexOf('/?p=1') > -1).to.equal(true)
		})

		it('option pageParam="pp"', function() {
			var elm = compileDirective('custom-pageParam')
			expect(elm.find('a[data-page="1"]').prop('href').indexOf('/?pp=1') > -1).to.equal(true)
		})

	})

	

})
