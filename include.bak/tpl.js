$.fuckUAddress='{{#this}}\
<div class="gap"></div>\
<div class="addressPage">\
  {{#each item}}\
  {{#if name}}\
  {{#if default}}\
  <div class="am-badge am-badge-success am-fr">默认地址</div>\
  {{/if}}\
  <div class="addressItem">\
    <p>收货人姓名：{{name}}</p>\
    <p>联系电话：{{phone}}</p>\
    <p>地址：{{address}}</p>\
  </div>\
  <div class="addressEdit an-u-sm-12 am-cf">\
    <a class="am-u-sm-4 adr-edit" href="{{editLink}}">修改地址 <span class="am-icon-pencil"></span></a>\
    {{#if default}}\
    {{else}}\
    <a class="am-u-sm-4 adr-df" href="{{defaultLink}}">设为默认 <span class="am-icon-check"></span></a>\
    {{/if}}\
    <a class="am-u-sm-4 am-u-end adr-del" href="{{delLink}}">删除地址 <span class="am-icon-exclamation"></span></a>\
  </div>\
  {{/if}}\
  {{/each}}\
  <div class="am-container">\
    <a href="{{addLink}}" class="am-u-sm-12 am-btn am-btn-primary am-btn-block am-round">新增地址 <span class="am-icon-pencil-square-o"></span></a>\
  </div>\
</div>\
{{/this}}';

$.fuckUInfo='{{#this}}\
<div class="gap"></div>\
<div class="orderPage">\
  {{#each item}}\
  {{#if orderNum}}\
  <div class="orderNum">订单号：{{orderNum}} <span class="am-icon-angle-down"></span> <span class="am-fr">￥{{price}}</span></div>\
    <div class="orderItem am-u-sm-12">\
      <a href="{{link}}">\
      <sapn class="projectImg am-u-sm-5"><img src="{{img}}" alt=""></sapn>\
      <div class="projectInfo am-u-sm-7">\
        <h3 class="am-fl">{{name}}</h3>\
        <p class="am-fl">{{reward}}</p>\
        <div class="status">\
          {{#if pjStatus}}\
          <span class="am-fl am-badge am-badge-success">众筹成功</span>\
          {{else}}\
          <span class="am-fl am-badge am-badge-secondary">众筹中</span>\
          {{/if}}\
          {{#if payStatus}}\
          <span class="am-fr am-badge am-badge-success">已支付</span>\
          {{else}}\
          <span class="am-fr am-badge am-badge-danger">未支付</span>\
          {{/if}}\
        </div>\
      </div>\
      </a>\
      {{#if payStatus}}\
      {{else}}\
      <div class="am-u-sm-12 payBtnContain"><a href="{{payLink}}" class="am-btn am-btn-success am-btn-block am-round toPay">立即支付 ￥{{price}}</a></div>\
      {{/if}}\
    </div>\
  {{/if}}\
  {{/each}}\
</div>\
{{/this}}';

$.fuckUOrder='{{#this}}{{/this}}';
$.fuckUReward='{{#this}}{{/this}}';
$.fuckUStart='{{#this}}{{/this}}';
$.fuckUPassword='{{#this}}{{/this}}';
$.fuckUSignOut='{{#this}}{{/this}}';

$.fuckU = '{{#this}}\
<div class="gap"></div>\
<div class="userHead am-container">\
  <div class="userImg am-u-sm-3">\
    <span class="userImgItem"><img src="{{userIcon}}" alt="userIcon"></span>\
  </div>\
  <div class="userName am-u-sm-9">\
    <p class="name">{{userName}}</p>\
    <p class="edit"><a href="{{infoPage}}">修改个人资料</a></p>\
  </div>\
</div>\
<div class="gap"></div>\
<div class="userBox am-container">\
  <div class="userItem am-u-sm-4"><a style="color:#5EB95E"  href="{{order}}"><span class="am-icon-shopping-cart"></span> <p>我的订单</p></a></div>\
  <div class="userItem am-u-sm-4"><a style="color:#00a5c5"  href="{{reward}}"><span class="am-icon-money"></span> <p>我的抽奖码</p></a></div>\
  <div class="userItem am-u-sm-4"><a style="color:#00a5c5" href="{{start}}"><span class="am-icon-child"></span> <p>我的发起</p></a></div>\
  <div class="userItem am-u-sm-4"><a style="color:#00a5c5" href="{{address}}"><span class="am-icon-truck"></span> <p>修改收货地址</p></a></div>\
  <div class="userItem am-u-sm-4"><a style="color:#00a5c5" href="{{password}}"><span class="am-icon-unlock-alt"></span> <p>修改密码</p></a></div>\
  <div class="userItem am-u-sm-4 am-u-end"><a style="color:#666666" href="{{signOut}}"><span class="am-icon-sign-out"></span> <p>退出登录</p></a></div>\
</div>\
<div class="gap"></div>\
{{/this}}\
';

$.fuckLogin ='{{#this}}\
  <div data-am-widget="tabs"\
       class="am-tabs"\
       id="loginPage" {{#if options.noSwipe}}data-am-tabs-noswipe="1"{{/if}}>\
    {{#if content}}\
      <ul class="am-tabs-nav am-cf loginTab">\
        {{#each content}}\
          <li class="{{#if active}}am-active{{/if}}"><a href="[data-tab-panel-{{@index}}]">{{{title}}}</a></li>\
        {{/each}}\
      </ul>\
      <div class="am-tabs-bd tabBox">\
        {{#each content}}\
          <div data-tab-panel-{{@index}} class="am-tab-panel {{#if active}}am-active{{/if}}">\
            {{#if form}}\
            <form action="{{form.formAction}}" name="{{form.formName}}" id="{{form.formId}}" method="{{form.formMt}}" enctype="{{form.enctype}}" novalidate="novalidate" class="am-form am-form-horizontal" data-am-validator>\
              {{#each form.label}}\
                <div class="am-form-group formContain">\
                  {{#if labelFor}}\
                  <label for="{{labelFor}}" class="am-u-sm-3 am-form-label">{{labelText}}</label>\
                  {{/if}}\
                  <div class="{{#if inputDivWidth}}am-u-sm-{{inputDivWidth}}{{else}}am-u-sm-9{{/if}} {{#if divClass}}{{divClass}}{{/if}}">\
                    {{#if inputExcit}}\
                    <input type="{{inputType}}" name="{{inputName}}" id="{{inputId}}" class="{{inputClass}}" value="{{inputValue}}" placeholder="{{inputPlaceholder}}" {{#if pattern}}pattern="{{pattern}}"{{/if}} required>\
                    {{/if}}\
                    {{#if img}}\
                    <img class="imgCode" src="{{img}}" alt="{{imgAlt}}">\
                    {{/if}}\
                    {{#if btn}}\
                    <a href="{{btnHref}}" {{#if btnOnclick}}onclick="{{btnOnclick}}"{{/if}} class="{{btnClass}}" id="{{btnId}}">{{btn}}</a>\
                    {{/if}}\
                  </div>\
                </div>\
              {{/each}}\
            </form>\
            {{/if}}\
          </div>\
        {{/each}}\
      </div>\
    {{/if}}\
  </div>\
{{/this}}'
;

$.fuckContent='{{#this}}\
<div class="am-container contentM">\
  {{#if imgSrc}}  \
  <img width="100%" src="{{imgSrc}}" class="imgClass" alt="{{imgAlt}}">\
  {{/if}}\
\
  {{#if title}}\
  <div class="am-g">\
    <h2 class="am-u-sm-12 contentTitle">{{title}}</h2>\
  </div>\
  {{/if}}\
\
  <div class="am-g">\
    <p class="am-u-sm-12 contentText">已筹资<span class="hadMoney">￥{{hadMoney}}({{progress}}%)</span>目标￥{{target}}</p>\
  </div>\
  <div class="am-progress am-progress-striped {{progressClass}}" style="margin-bottom:0px;height:9px;">\
    <div class="am-progress-bar am-progress-bar-danger" style="width: {{progress}}%"></div>\
  </div>\
  <div class="am-g">\
    <p class="am-u-sm-3" style="margin-top:0px">支持数<strong><span>{{support}}</span></strong></p>\
    <p class="am-u-sm-3" style="margin-top:0px;text-align:right;">{{leftDay}}</p>\
  </div>\
  <div class="am-g" id="showDetail">\
    <p class="am-u-sm-12">{{dsc}} <a href="{{dscHref}}">(查看详情)</a></p>\
  </div>\
\
<div class="am-g">\
  <p class="chioceText"><i class="am-icon-chevron-down"></i>选择回报</p>\
</div>\
  <div class="am-g">\
    {{#each item}}\
    {{#if price}}\
      <div class="am-u-sm-12 repayItem">\
        <a href="{{href}}">\
          <h3 class="price"><span class="priceNum">{{price}}</span> <span class="supportMan">{{supportMan}}/{{maxMan}}</span><i style="line-height:41px;float:right" class="am-icon-chevron-right"></i><span style="line-height:41px;float:right;border-bottom:#f3f3f3;">&nbsp;</span></h3>\
          {{#each repayDsc}}\
          <p class="repayDsc">{{{dsc}}}</p>\
          {{/each}}\
        </a>\
        <div class="repayImg">\
          <ul data-am-widget="gallery" class="am-gallery am-gallery-default am-avg-sm-4" data-am-gallery="{ pureview: true }">\
            {{#each img}}\
            {{#if imgSrc}}\
            <li>\
              <div class="am-gallery-item ">\
              <a href="{{imgSrc}}">\
                <img class="am-radius am-img-thumbnail" src="{{imgSrc}}" alt="{{imgAlt}}" width="80px" height="80px">\
              </a>\
              </div>\
            </li>\
            {{/if}}\
            {{/each}}\
          </ul>\
        </div>\
      </div>\
      <div class="am-u-sm-12 repayDlv"></div>\
    {{/if}}\
    {{/each}}\
  </div>\
</div>\
<div class="detailShow hide am-container" id="detailShow">\
  <h3 class="detailTitle">项目简介</h3>\
  {{{video}}}\
  {{{detailData}}}\
</div>\
{{/this}}'
;

$.fuckPay='{{#this}}\
<div class="totalPage" id="totalPage">\
<h3 class="objTitle">{{objTitle}}</h3>\
<div class="am-container am-tabs payBox">\
  <ul class="am-g payChioceBox am-tabs-nav">\
    {{#each payTitle}}\
    {{#if title}}\
    <li class="am-u-sm-4 {{#if first}}{{first}}{{/if}} payChioce"><a data-id="{{dataId}}" class="payChioceBtn payChioceClick" href="#tab{{@index}}" data-price="{{title}}">{{title}}元</a></li>\
    {{/if}}\
    {{/each}}\
    <li class="am-u-sm-4 {{#if selfless.first}}{{selfless.first}}{{/if}} am-u-end payChioce"><a id="selfless" data-id="{{selfless.data}}" class="payChioceBtn" href="#seftSupport">{{selfless.title}}</a></li>\
  </ul>\
  <div class="slipDiv"><i class="am-icon-chevron-down"></i></div>\
  <div class="am-tabs-bd am-g">\
    {{#each item}}\
    {{#if payItemDsc}}\
    <div class=" am-tab-panel payItem" id="tab{{@index}}">\
      <p class="payItemTitle">您的回报：</p>\
      <p class="payItemDsc">{{{payItemDsc}}}</p>\
        <div class="repayImg">\
          <ul data-am-widget="gallery" class="am-gallery am-gallery-default am-avg-sm-4" data-am-gallery="{ pureview: true }">\
            {{#each img}}\
            {{#if imgSrc}}\
            <li>\
              <div class="am-gallery-item ">\
              <a href="{{imgSrc}}">\
                <img class="am-radius am-img-thumbnail" src="{{imgSrc}}" alt="{{imgAlt}}" width="80px" height="80px">\
              </a>\
              </div>\
            </li>\
            {{/if}}\
            {{/each}}\
          </ul>\
        </div>\
        <div class="supportBox am-u-sm-12 am-cf"><p class="supportGet am-fr"><span>{{supportHum}}</span>人支持</p><p class="slip am-fr"></p><p class="progressGet am-fr">已完成<span>{{progressGet}}%</span></p></div>\
    </div>\
    {{/if}}\
    {{/each}}\
    <div class=" am-tab-panel payItem" id="seftSupport">\
      <p class="payItemTitle">您的回报：</p>\
      <p class="payItemDsc">感谢您的支持：您将收到我们寄出的信件或贺卡，这份支持将助我们的梦想飞的更高更远。</p>\
      <input type="text" class="am-form-field" id="dnPriceInput" name="xxx" placeholder="输入支持的金额"/>\
    <div class="supportBox am-u-sm-12 am-cf"> </div>\
    </div>\
  </div>\
</div>\
<div class="totalSlipDiv"></div>\
<div class="fixBox am-container" id="gotoAdd">\
  <div class="addressBox">\
    <p class="userName">收件人：<span id="userName-view">{{userName}}</span></p>\
    <p class="phoneNum">联系电话：<span id="phone-view">{{phone}}</span></p>\
    <p class="fix">联系地址：<span id="fix-view">{{fix}}</span></p>\
  </div>\
  <div class="addressFix am-cf"><i class="am-icon-chevron-right am-fr"></i><p class="am-fr">新增或选择更多地址</p></div>\
</div>\
<div class="totalSlipDiv"></div>\
<div class="picBox am-container">\
  <p class="am-fl picText">份数</p>\
  <div class="am-input-group am-input-group-sm picInput am-fr">\
    <span class="am-input-group-label inputPlus" id="inputPlus">+</span>\
    <input type="text" class="am-form-field" id="pic" value="1">\
    <span class="am-input-group-label inputMinuse" id="inputMinuse">-</span>\
  </div>\
</div>\
<div class="transMoney am-container">\
  <p class="am-fl transPay">运费</p>\
  <p class="am-fr value">免运费</p>\
</div>\
<div class="totalPay am-container">\
  <p class="am-fl totalText">支付总额</p>\
  <p class="am-fr value"><span id="wholePrice">000.00</span>元</p>\
</div>\
<div class="tips am-container">\
  <div class="am-input-group am-input-group-sm tipsInput">\
    <span class="am-input-group-label">备注:</span>\
    <input type="text" id="bz" class="am-form-field" placeholder="选填，订单的特殊要求">\
  </div>\
</div>\
<div class="submitBox am-container">\
  <input type="submit" id="confirmOrder" class="am-btn am-btn-success am-btn-block" value="提交订单">\
</div>\
</div>\
\
<div class="addressPage addresrrHide am-container" id="addressPage" >\
{{#each addressItem}}\
{{#if name}}\
  <div class="addressItemBox am-cf">\
    <label data-name="{{name}}" data-phone="{{phone}}" data-address="{{address}}" class="am-u-sm-8 am-radio am-secondary am-success addressItem" id="{{check}}">\
      <input type="radio" name="radio3" value="">\
      <p id="nameAndPhone">{{name}}-{{phone}}</p>\
      <p id="provinceAndCity">{{address}}</p>\
    </label>\
    <a data-del="{{id}}" class="am-fr am-u-sm-2 fixBtn delAddress" href="javascript:;">删除</a>\
    <a data-edit="{{id}}" class="am-fr am-u-sm-2 fixBtn editAddress" href="javascript:;">修改</a>\
  </div>\
{{/if}}\
{{/each}}\
  <div class="addressItemBox">\
    <a href="javascript:;" id="confirmAdr" class="am-btn am-btn-primary am-btn-block" >确认选择</a>\
    <a href="javascript:;" id="newAdr" class="am-btn am-btn-default am-btn-block " >新增地址</a>\
  </div>\
</div>\
\
<div class="fixPage fixHide am-container" id="fixPage" >\
  <form action="../doaction.php" method="post" name="addform" id="addressForm" class="am-form" data-am-validator>\
  <div class="am-form-group">\
    <label for="">收件人姓名</label>\
    <input type="text" name="truename" class="" id="truename" placeholder="输入收件人姓名" required>\
  </div>\
  <div class="am-form-group">\
    <label for="">手机号/联系电话</label>\
    <input type="text" name="phone" class="" id="phone" placeholder="输入手机号/联系电话" required>\
  </div>\
  \
  <div class="am-form-group">\
    <label for="province">选择省份</label>\
    <select id="province" name="province" required>\
    </select>\
    <span class="am-form-caret"></span>\
  </div>\
  \
  <div class="am-form-group">\
    <label for="city">选择城市</label>\
    <select id="city" name="city" required>\
    </select>\
    <span class="am-form-caret"></span>\
  </div>\
  <div class="am-form-group">\
    <label for="">地址</label>\
    <input type="text" name="address" class="" id="address" placeholder="填写详细地址" required>\
  </div>\
  <button class="am-btn am-btn-primary am-btn-block" type="submit" id="gotoSubmit">确认保存</button>\
</form>\
</div>\
\
<div class="selectPay fixHide am-container" id="selectPay">\
  <div class="selectPayTitle">\
    <p>订单总价<span class="needMoney">5944</span></p>\
  </div>\
  <div class="am-u-sm-12 am-form-group selectPayBox">\
    <label class="am-checkbox payItemBox" id="wechat">\
      <input type="radio" name="123" class="am-ucheck-checkbox" data-am-ucheck checked/>\
      微信支付\
      <span class="wechat"></span>\
    </label>\
    <label class="am-checkbox payItemBox" id="alipay">\
      <input type="radio" name="123" class="am-ucheck-checkbox" data-am-ucheck/>\
      支付宝\
      <span class="alipay"></span>\
    </label>\
  </div>\
  <form action="/e/ShopSys/doaction.php" method="post" name="addform" id="finalForm" class="am-form">\
    <input name="addressname" id="1" type="hidden" value="">\
    <input name="truename" id="2" type="hidden" value="">\
    <input name="phone" id="3" type="hidden" value="">\
    <input name="address" id="4" type="hidden" value="">\
    <input name="bz" id="5" type="hidden" value="">\
    <input name="bankjm" id="6" type="hidden" value="">\
    <input name="payfsid" id="7" type="hidden" value="7">\
    <input name="ddno" id="8" type="hidden" value="{{onlyOrderNum}}">\
    <input name="enews" id="9" type="hidden" value="AddDd">\
    <input name="alltotal" id="10" type="hidden" value="">\
    <input name="alltotalfen" id="11" type="hidden" value="">\
    <input name="dnPriceInput" id="12" type="hidden" value="">\
    <input type="submit" class="am-btn am-btn-success am-btn-block" value="去支付"/>\
  </form>\
</div>\
{{/this}}\
';