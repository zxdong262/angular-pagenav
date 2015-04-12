# angular-pagenav
a angular pagenav directive

## get
```bash
bower install angular-pagenav
```

## use

### reference it in html
```html
<script src="angular-pagenav.min.js">
```

### init
```html
<div ng-controller="cl">
<span pagenav page="page" page-size="pageSize" total="total" options="opts"></span>
</div>
```
```javascript
//main
angular.module('ctrl', [
    'zPagenav'
])
.controller('cl', function Cl() {
    this.page = 1
    this.pageSize = 20
    this.total = 500
    this.opts = {
        pageSize: opts.pageSize || 10     //items to show per page
        ,maxLinkShow: opts.maxLinkShow || 5    //how many links to render max
        ,itemTotal: opts.itemTotal || 110      //how many items in total
        ,page: opts.page || 1           //the page number 
        ,lang: opts.lang || {          // lang
                page: 'page'
                ,afterCurrentPage: ', '
                ,intotal: 'in total'
                ,Prev: 'Prev'
                ,Next: 'Next'
                ,more:'...'
        }
        ,url: opts.url || 'javascript:;' //page url
        ,pageParam: opts.pageParam || 'p' //page param name, '/?p=2'
        ,noFirstPageParam: opts.noFirstPageParam || false //when p=1, do not use it
        ,ngClick: true //ngclick event
    }
})
```

### style it
```css
.pagenav-desc {
  display: none;
}

.pagenav-total {
  padding: 6px 12px;
  color: #008000;
  display: inline-block;
}

.pagenav-link {
  padding: 6px 12px;
  display: inline-block;
  color: #999;
  border: 1px solid #ddd;
  background: #fff;
}

.pagenav-link:hover {
  background: #337ab7;
  color: #fff;
}

.pagenav-link:first-child {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagenav-link:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagenav-more {
  padding: 6px 12px;
  display: inline-block;
  color: #ddd;
  border: 1px solid #ddd;
  background: #fff;
}

.pagenav-current-link {
  color: #fff;
  padding: 6px 12px;
  display: inline-block;
  background: #337ab7;
  border: 1px solid #337ab7;
}

.only-one-page {
  display: none;
}
```

## test
```bash
git clone https://github.com/zxdong262/angular-pagenav.git
cd angular-pagenav
npm install
bower install
gulp test
```
