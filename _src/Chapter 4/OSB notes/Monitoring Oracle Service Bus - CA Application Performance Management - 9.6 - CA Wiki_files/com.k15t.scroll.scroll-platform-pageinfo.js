;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/deleteversion-dialog.html' */
(function(window, undefined){ 
window.auiNg = window.auiNg || {};
auiNg._templates = auiNg._templates || {};
 var pluginTemplates = auiNg._templates['com.k15t.scroll.scroll-platform'] =  auiNg._templates['com.k15t.scroll.scroll-platform'] || {};
var moduleTemplates = pluginTemplates['pageinfo-webresources'] = pluginTemplates['pageinfo-webresources'] || {};
moduleTemplates['deleteversion-dialog.js'] = '<div ng-controller="PageOperationsController">    <div aui-dialog-page header="Delete Page Version {{targetVersion.name}}">        <div aui-dialog-panel>            <div>                <p>                    Do you want to delete page version {{targetVersion.name}}?                </p>            </div>        </div>        <a aui-dialog-button ng-click="deletePage()">Delete</a>        <a aui-dialog-link ng-click="cancel()">Cancel</a>    </div>    <div aui-dialog-page header="Delete Page Version {{targetVersion.name}}">        <div aui-dialog-panel>            <div class="aui-message shadowed success">                <p class="title">                    <span class="aui-icon icon-success"></span>                    <strong>Success</strong>                </p>                <p>                    Page version {{targetVersion.name}} has been deleted successfully.                </p>            </div>        </div>        <a aui-dialog-button ng-click="close()">Close</a>    </div></div>';
})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/convert-to-unversioned-dialog.html' */
(function(window, undefined){ 
window.auiNg = window.auiNg || {};
auiNg._templates = auiNg._templates || {};
 var pluginTemplates = auiNg._templates['com.k15t.scroll.scroll-platform'] =  auiNg._templates['com.k15t.scroll.scroll-platform'] || {};
var moduleTemplates = pluginTemplates['pageinfo-webresources'] = pluginTemplates['pageinfo-webresources'] || {};
moduleTemplates['convert-to-unversioned-dialog.js'] = '<div ng-controller="PageOperationsController">    <div aui-dialog-page header="Convert to Unversioned">        <div aui-dialog-panel>            <div>                <div ng-show="hasOtherVersions" class="aui-message warning shadowed">                    <p class="title">Converting a page version in an unversioned page, deletes all other existing page versions!</p>                    <span class="aui-icon icon-warning"></span>                </div>                <p>                    Are you sure you want to convert the page into an unversioned page?                </p>            </div>        </div>        <a aui-dialog-button ng-click="convertToUnversionedPage()">Convert</a>        <a aui-dialog-link ng-click="cancel()">Cancel</a>    </div>    <div aui-dialog-page header="Convert to Unversioned">        <div aui-dialog-panel>            <div class="aui-message shadowed success">                <p class="title">                    <span class="aui-icon icon-success"></span>                    <strong>Success</strong>                </p>                <p>                    Page was converted into an unversioned page successfully.                </p>            </div>        </div>        <a aui-dialog-button ng-click="close()">Close</a>    </div></div>';
})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/reschedule-dialog.html' */
(function(window, undefined){ 
window.auiNg = window.auiNg || {};
auiNg._templates = auiNg._templates || {};
 var pluginTemplates = auiNg._templates['com.k15t.scroll.scroll-platform'] =  auiNg._templates['com.k15t.scroll.scroll-platform'] || {};
var moduleTemplates = pluginTemplates['pageinfo-webresources'] = pluginTemplates['pageinfo-webresources'] || {};
moduleTemplates['reschedule-dialog.js'] = '<div ng-controller="RescheduleController">    <div aui-dialog-page header="Reschedule page">        <div aui-dialog-panel>            <p>Reschedule Page Version {{sourceVersion}} to</p>            <form id="sv-reschedule-version" class="aui">                <fieldset>                    <div class="field-group">                        <label for="toVersion">New page version</label>                        <select class="select medium-field" id="toVersion" required ng-model="toVersion" ng-options="v.name for v in allVersions">                            <option value="">Please select..</option>                        </select>                        <div class="description">                            Select the version that will contain the changes from version {{fromVersion.name}}.                        </div>                        <div class="description">                            Need to create a new version? <a href="{{contextPath}}/spaces/com.k15t.scroll.platform/versions.action?key={{spaceKey}}" target="_blank">Go to manage versions</a>                        </div>                    </div>                </fieldset>            </form>        </div>        <a aui-dialog-button ng-click="checkConflicts()" aui-disabled="!canSave()">Reschedule</a>        <a aui-dialog-link ng-click="cancel()">Cancel</a>    </div>    <div aui-dialog-page header="Reschedule page">        <div aui-dialog-panel>            <div>                <div class="aui-message warning shadowed">                    <p class="title">You chose a version, which already has a versioned content.</p>                    <span class="aui-icon icon-warning"></span>                    If you want to reschedule page version {{fromVersion.name}} into version {{toVersion.name}}, you will overwrite the existing content with the new content.                </div>                <br>            </div>        </div>        <a aui-dialog-button ng-click="reschedule()">Overwrite</a>        <a aui-dialog-link ng-click="cancel()">Cancel</a>    </div>    <div aui-dialog-page header="Reschedule page">        <div aui-dialog-panel>            <div class="aui-message shadowed success">                <p class="title">                    <span class="aui-icon icon-success"></span>                    <strong>Success</strong>                </p>                <p>                    Reschedule was successful.                </p>            </div>        </div>        <a aui-dialog-button ng-click="close()">Close</a>    </div></div>';
})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/pageoperations.js' */
(function(d,c,b,a){c.module("sv-ext-operations",["auiNg","ngResource"]).controller("PageOperationsController",["$scope","$http","ScrollPage",function(f,g,e){f.targetVersion=Scroll.Versions.Context.getVersion(f.targetVersionId);f.hasOtherVersions=false;f.getVersionsCount=function(){return g.post(contextPath+"/rest/scroll-versions/1.0"+"/page/"+AJS.params.spaceKey,[{queryArg:"scrollPageId",value:Scroll.Versions.Context.page.scrollPageId},{queryArg:"pageType",value:"change"}]).success(function(h){f.hasOtherVersions=h.length>1})};f.getVersionsCount();f.redirectLocation={};f.deletePage=function(){var i=function(j){f.redirectLocation=contextPath+j.confluencePage.urlPath;f.auiDialog.gotoPage(1);window.setTimeout(function(){window.location=f.redirectLocation},1000)};var h=function(j){f.errorMessage=j.data.message};e.remove({scrollPageId:Scroll.Versions.Context.page.scrollPageId,versionId:f.targetVersionId},i,h)};f.convertToUnversionedPage=function(){var i=function(j){f.redirectLocation=contextPath+j.confluencePage.urlPath;f.auiDialog.gotoPage(1);window.setTimeout(function(){window.location=f.redirectLocation},1000)};var h=function(j){f.errorMessage=j.data.message};e.convertToUnversionedPage({scrollPageId:Scroll.Versions.Context.page.scrollPageId,versionId:f.targetVersionId},i,h)};f.cancel=function(){f.auiDialog.close(false)};f.close=function(){window.location=f.redirectLocation}}]).controller("RescheduleController",["$scope","$timeout","$http","ScrollPage","rescheduleService",function(f,i,g,e,h){f.contextPath=contextPath;f.spaceKey=AJS.params.spaceKey;f.fromVersion=Scroll.Versions.Context.getVersion(f.targetVersionId,true);f.toVersion=null;f.allVersions=a.filter(Scroll.Versions.Context.space.allVersions,function(j){return j.versionId!==f.fromVersion.versionId});f.checkConflicts=function(){if(h.exists(Scroll.Versions.Context.page.scrollPageId,f.toVersion.versionId,function(j){if(j){f.auiDialog.gotoPage(1)}else{f.reschedule()}})){}};f.redirectLocation={};f.reschedule=function(){if(f.toVersion){h.reschedule(Scroll.Versions.Context.page.scrollPageId,f.fromVersion.versionId,f.toVersion.versionId,function j(k){f.redirectLocation=contextPath+k.confluencePage.urlPath;f.auiDialog.gotoPage(2);window.setTimeout(function(){window.location=f.redirectLocation},1000)})}};f.canSave=function(){return f.toVersion};f.cancel=function(){f.auiDialog.close(false)};f.close=function(){window.location=f.redirectLocation}}]).service("rescheduleService",["$http",function(e){this.reschedule=function(g,f,h,i){e.post(contextPath+"/rest/scroll-versions/1.0"+"/page/"+AJS.params.spaceKey+"/reschedule/"+g+"/"+f+"/"+h).success(i)};this.exists=function(g,h,f){e.post(contextPath+"/rest/scroll-versions/1.0"+"/page/"+AJS.params.spaceKey,[{queryArg:"scrollPageId",value:g},{queryArg:"pageType",value:"change"},{queryArg:"version",value:h}]).success(function(i){f(i.length===1)})}}]).factory("ScrollPage",["$resource",function(e){return e(contextPath+"/rest/scroll-versions/1.0"+"/page/"+AJS.params.spaceKey+"/:scrollPageId/:versionId",{scrollPageId:"@scrollPageId",versionId:"@versionId"},{remove:{method:"DELETE"},convertToUnversionedPage:{method:"PUT"}})}])})(AJS.$,angular,auiNg,Scroll.Versions._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/pageinfo.soy' */
// This file was automatically generated from pageinfo.soy.
// Please don't edit this file by hand.

if (typeof Scroll == 'undefined') { var Scroll = {}; }
if (typeof Scroll.Versions == 'undefined') { Scroll.Versions = {}; }
if (typeof Scroll.Versions.PageInfo == 'undefined') { Scroll.Versions.PageInfo = {}; }
if (typeof Scroll.Versions.PageInfo.Templates == 'undefined') { Scroll.Versions.PageInfo.Templates = {}; }


Scroll.Versions.PageInfo.Templates.versionsPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="aui"><thead><tr><th id="versions_name">', soy.$$escapeHtml("Version"), '</th>', (Scroll.Versions.Context.space.isWorkflowEnabled) ? '<th id="versions_status">' + soy.$$escapeHtml("Status") + '</th>' : '', '<th id="versions_changeinfo">', soy.$$escapeHtml("Change Info"), '</th><th id="versions_operations">', soy.$$escapeHtml("Actions"), '</th></tr></thead><tbody>');
  if (opt_data.masterPage.unversioned) {
    output.append('<tr><td style="height: 44px; text-align: center;" colspan="4">', soy.$$escapeHtml("This page is unversioned. It is available and contains the same content in all versions of this space."), '</td></tr>');
  } else {
    var targetVersionList22 = opt_data.targetVersions;
    var targetVersionListLen22 = targetVersionList22.length;
    for (var targetVersionIndex22 = 0; targetVersionIndex22 < targetVersionListLen22; targetVersionIndex22++) {
      var targetVersionData22 = targetVersionList22[targetVersionIndex22];
      if (Scroll.Versions.Context.user.settings.isShowArchivedVersions || targetVersionData22.isArchived != true) {
        output.append('<tr data-original-version-id="', soy.$$escapeHtml(targetVersionData22.versionId), '"><td headers="version_name" class="sv-truncate-text" style="min-width: 100px; max-width: 200px"><a href="', soy.$$escapeHtml(contextPath), soy.$$escapeHtml("/rest/scroll-versions/1.0"), '/versions/user?workingVersionId=', soy.$$escapeHtml(targetVersionData22.versionId), '&pageId=', soy.$$escapeHtml(AJS.params.pageId), '" title="', soy.$$escapeHtml(targetVersionData22.name), '" class="sv-version-link">', soy.$$escapeHtml(targetVersionData22.name), '</a></td>', (Scroll.Versions.Context.space.isWorkflowEnabled) ? '<td headers="version_status" style="min-width: 100px;">' + ((targetVersionData22.change && targetVersionData22.state) ? soy.$$escapeHtml(targetVersionData22.state.i18nName) : '') + '</td>' : '', '<td headers="version_changeinfo" class="sv-break-text" style="width:100%">');
        if (targetVersionData22.change) {
          Scroll.Versions.Templates.PageDiff.summary({pageDiff: targetVersionData22.pageDiff}, output);
        } else if (targetVersionData22.isAvailable) {
          output.append(soy.$$escapeHtml(AJS.format("Page not changed in version {0}.",targetVersionData22.abbreviateName)));
        } else {
          output.append(soy.$$escapeHtml(AJS.format("Page not available in version {0}.",targetVersionData22.abbreviateName)));
        }
        output.append('</td><td headers="version_operations"><div class="aui-toolbar"><a href="', soy.$$escapeHtml(contextPath), soy.$$escapeHtml("/rest/scroll-versions/1.0"), '/versions/user?workingVersionId=', soy.$$escapeHtml(targetVersionData22.versionId), '&pageId=', soy.$$escapeHtml(AJS.params.pageId), '">', soy.$$escapeHtml("View"), '</a>&nbsp;&nbsp;<a href="#" class="item-link sv-pagediff-opener" data-page-id="', soy.$$escapeHtml(AJS.params.pageId), '" data-original-version-id="', soy.$$escapeHtml(Scroll.Versions.Context.workingVersion.versionId), '" data-original-version-name="', soy.$$escapeHtml(Scroll.Versions.Context.workingVersion.name), '" data-new-version-id="', soy.$$escapeHtml(targetVersionData22.versionId), '" data-new-version-name="', soy.$$escapeHtml(targetVersionData22.name), '"">', soy.$$escapeHtml("Compare"), '</a>', (targetVersionData22.change && Scroll.Versions.Context.user.permissions.ManageContent) ? '<button aria-owns="dropdown-button-extended-operations-' + soy.$$escapeHtml(targetVersionData22.versionId) + '" aria-haspopup="true" class="aui-button aui-button-subtle aui-dropdown2-trigger sv-ext-operations-button" data-container="#adg-table-1"><span class="aui-icon aui-icon-small aui-iconfont-configure">Configure</span></button><div id="dropdown-button-extended-operations-' + soy.$$escapeHtml(targetVersionData22.versionId) + '" class="aui-dropdown2 aui-style-default" aria-hidden="false" data-dropdown2-alignment="right"><ul class="aui-list-truncate"><li class="dropdown-item">' + ((opt_data.isLastVersion) ? '<a href="#" class="sv-link-disabled" aria-disabled="true" >' + soy.$$escapeHtml("Delete Page Version") + '</a>' : '<a href="#" class="item-link sv-delete-opener" data-page-id="' + soy.$$escapeHtml(AJS.params.pageId) + '" data-original-version-id="' + soy.$$escapeHtml(targetVersionData22.versionId) + '" data-original-version-name="' + soy.$$escapeHtml(targetVersionData22.name) + '">' + soy.$$escapeHtml("Delete Page Version") + '</a>') + '</li><li class="dropdown-item"><a href="#" class="item-link sv-convertToUnversioned-opener" data-page-id="' + soy.$$escapeHtml(AJS.params.pageId) + '" data-original-version-id="' + soy.$$escapeHtml(targetVersionData22.versionId) + '" data-original-version-name="' + soy.$$escapeHtml(targetVersionData22.name) + '">' + soy.$$escapeHtml("Convert to Unversioned") + '</a></li><li class="dropdown-item"><a href="#" class="item-link sv-reschedule-opener" data-page-id="' + soy.$$escapeHtml(AJS.params.pageId) + '" data-original-version-id="' + soy.$$escapeHtml(targetVersionData22.versionId) + '" data-original-version-name="' + soy.$$escapeHtml(targetVersionData22.name) + '">' + soy.$$escapeHtml("Reschedule") + '</a></li></ul></div>' : '', '</div></td></tr>');
      }
    }
  }
  output.append('</tbody></table>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.PageInfo.Templates.variantsPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="header">', soy.$$escapeHtml("Available in Variants"), '</p>');
  if (opt_data.enabledVariants.length > 0) {
    output.append('<ul class="sv-variant-list label-list" style="border-bottom: 1px solid #DDD; padding: 4px 0.6em;">');
    var variantList126 = opt_data.enabledVariants;
    var variantListLen126 = variantList126.length;
    for (var variantIndex126 = 0; variantIndex126 < variantListLen126; variantIndex126++) {
      var variantData126 = variantList126[variantIndex126];
      output.append('<li class="label-container"><span class="label  aui-label confluence-label">', soy.$$escapeHtml(variantData126.name), '</span></li>');
    }
    output.append('</ul>');
  } else {
    output.append('<p style="border-bottom: 1px solid #DDD; padding-bottom: 10px; padding-left: 0.6em;"><em>', soy.$$escapeHtml("none"), '</em></p>');
  }
  output.append('<p>', soy.$$escapeHtml("To change the variants,"), ' <a href="#" class="sv-edit-attributes" title="Edit Attributes">', soy.$$escapeHtml("edit attributes for this page"), '</a>.</p>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.PageInfo.Templates.reusePane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.includingPages.length <= 0) ? '<p class="header">' + soy.$$escapeHtml(AJS.format("This page is not re-used on other pages (in version {0})",opt_data.targetVersion.name)) + '</p>' : (opt_data.includingPages.length == 1) ? '<p class="header">' + soy.$$escapeHtml(AJS.format("This page is re-used on {0} other page (in version {1})",opt_data.includingPages.length,opt_data.targetVersion.name)) + '</p>' : '<p class="header">' + soy.$$escapeHtml(AJS.format("This page is re-used on {0} other pages (in version {1})",opt_data.includingPages.length,opt_data.targetVersion.name)) + '</p>', '<p class="first-child">');
  if (opt_data.includingPages.length) {
    var includingPageList158 = opt_data.includingPages;
    var includingPageListLen158 = includingPageList158.length;
    for (var includingPageIndex158 = 0; includingPageIndex158 < includingPageListLen158; includingPageIndex158++) {
      var includingPageData158 = includingPageList158[includingPageIndex158];
      output.append('<a href="', soy.$$escapeHtml(contextPath), soy.$$escapeHtml(includingPageData158.confluencePage.urlPath), '">', soy.$$escapeHtml(includingPageData158.scrollPageTitle), '</a>', (! (includingPageIndex158 == includingPageListLen158 - 1)) ? ', ' : '');
    }
  }
  output.append('</p>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.PageInfo.Templates.relatedPages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="aui"><thead><tr><th id="related_space" style="width: 30%;">', soy.$$escapeHtml("Space"), '</th><th id="related_page" style="width: 40%;">', soy.$$escapeHtml("Page"), '</th><th id="related_operations" style="width: 30%;">', soy.$$escapeHtml("Operations"), '</th></tr></thead><tbody>');
  var relatedPageList178 = opt_data.relatedPages;
  var relatedPageListLen178 = relatedPageList178.length;
  if (relatedPageListLen178 > 0) {
    for (var relatedPageIndex178 = 0; relatedPageIndex178 < relatedPageListLen178; relatedPageIndex178++) {
      var relatedPageData178 = relatedPageList178[relatedPageIndex178];
      output.append('<tr><td id="related_space">', soy.$$escapeHtml(relatedPageData178.space.name), ' <span style="font-size: 11px;">[', soy.$$escapeHtml(relatedPageData178.space.key), ']</span></td><td id="related_page"><a href="', soy.$$escapeHtml(contextPath), soy.$$escapeHtml(relatedPageData178.page.confluencePage.urlPath), '">', soy.$$escapeHtml(relatedPageData178.page.scrollPageTitle), '</a></td><td id="related_operations"><div class="aui-toolbar"><div class="toolbar-split toolbar-split-left" style="margin-left: 0;"><ul class="toolbar-group" aui-dropdown=""><li class="toolbar-item page-history"><a href="', soy.$$escapeHtml(contextPath), '/pages/viewpreviousversions.action?pageId=', soy.$$escapeHtml(relatedPageData178.page.confluencePage.id), '" target="_new', soy.$$escapeHtml(relatedPageData178.page.confluencePage.id), '" class="toolbar-trigger sv-showpagehistory" style="line-height: 1.3em;">', soy.$$escapeHtml("Page History"), '&nbsp;<span class="icon icon-newwindow" style="float: right; height: 16px;" title="', soy.$$escapeHtml("Open in new Window"), '"></span></a></li></ul></div></div></td></tr>');
    }
  } else {
    output.append('<tr><td colspan="3" style="height: 44px; text-align: center;">', soy.$$escapeHtml("None"), '</td></tr>');
  }
  output.append('</tbody></table>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.PageInfo.Templates.advancedPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="header">', soy.$$escapeHtml("Page Properties"), ':</p><ul style="list-style: none; padding-left: 0.6em;">');
  var dateList209 = opt_data.data;
  var dateListLen209 = dateList209.length;
  for (var dateIndex209 = 0; dateIndex209 < dateListLen209; dateIndex209++) {
    var dateData209 = dateList209[dateIndex209];
    output.append('<li><strong style="width: 120px; display: inline-block;">', soy.$$escapeHtml(dateData209.name), ':</strong> ', soy.$$escapeHtml(dateData209.value), '</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


Scroll.Versions.PageInfo.Templates.wfState = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="sv-infoline-dialog-content"><p style="margin-bottom: 0;"><strong>', soy.$$escapeHtml("Workflow Action:"), '</strong></p>');
  if (opt_data.wfStateModel.actions.length > 0) {
    output.append('<ul class="sv-workflow-actions">');
    var actionList224 = opt_data.wfStateModel.actions;
    var actionListLen224 = actionList224.length;
    for (var actionIndex224 = 0; actionIndex224 < actionListLen224; actionIndex224++) {
      var actionData224 = actionList224[actionIndex224];
      output.append('<li><a href="#" class="sv-workflow-action" data-action-id="', soy.$$escapeHtml(actionData224.id), '" data-action-name="', soy.$$escapeHtml(actionData224.i18nName), '">', soy.$$escapeHtml(actionData224.i18nName), '</a></li>');
    }
    output.append('</ul>');
  } else {
    output.append('<p>', soy.$$escapeHtml("You cannot execute any workflow actions in this page status. Please ask a documentation administrator."), '</p>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.k15t.scroll.scroll-platform:pageinfo-webresources', location = '/com/k15t/scroll/platform/ui/pageinfo/pageinfo.js' */
(function(d,b,j,h){AJS.toInit(function(){i();c();g();f();a()});var g=function(){var p=contextPath+"/rest/scroll-versions/1.0"+"/infopanel/";var k="#sv-versions";var r={"sv-versions":{id:"sv-versions",resourceName:"versions",template:Scroll.Versions.PageInfo.Templates.versionsPane,init:function(v,w){var u=h.show(v);d.getJSON(p+w.resourceName,{confluencePageId:AJS.params.pageId,since:new Date().getTime()},function(x){s.find("a[href='#"+w.id+"'] strong").text(x.tabTitle);s.find("#"+w.id).html(w.template(x));s.find("#"+w.id+" .compare-with").dropDown("Standard",{alignment:"right"});s.find(".sv-delete-opener").each(function(y,z){d(this).click(function(){var A=b.getPartial(Scroll.Versions.Context.product.pluginKey,"pageinfo-webresources","deleteversion-dialog");b.createDialogApp("sv-ext-operations",A,{height:280,width:640,className:"sv-dialog",targetVersionId:d(this).data("original-version-id")},function(){})})});s.find(".sv-convertToUnversioned-opener").each(function(y,z){d(this).click(function(){var A=b.getPartial(Scroll.Versions.Context.product.pluginKey,"pageinfo-webresources","convert-to-unversioned-dialog");b.createDialogApp("sv-ext-operations",A,{height:280,width:640,className:"sv-dialog",targetVersionId:d(this).data("original-version-id")},function(){})})});s.find(".sv-reschedule-opener").each(function(y,z){d(this).click(function(){var A=b.getPartial(Scroll.Versions.Context.product.pluginKey,"pageinfo-webresources","reschedule-dialog");b.createDialogApp("sv-ext-operations",A,{height:280,width:640,className:"sv-dialog",targetVersionId:d(this).data("original-version-id")},function(){})})});u.hide()})}},"sv-variants":{id:"sv-variants",template:Scroll.Versions.PageInfo.Templates.variantsPane,init:function(v){var u=h.show(v);d.getJSON(p+"variants",{confluencePageId:AJS.params.pageId,since:new Date().getTime()},function(w){s.find("a[href='#sv-variants'] strong").text(w.tabTitle);d.each(w.attributes,function(x,y){y.actualValues=w.attributeValues[x]});s.find("#sv-variants").html(Scroll.Versions.PageInfo.Templates.variantsPane({enabledVariants:w.enabledVariants,attributes:w.attributes}));v.find("a.sv-edit-attributes").click(function(){var x=b.getPartial(Scroll.Versions.Context.product.pluginKey,"conditional-conditionchooser-webresources","conditional-dialog");b.createDialogApp("sv-conditional",x,{height:440,width:720,className:"sv-dialog"},function(){o("sv-variants")})});u.hide()})}},"sv-reuse":{id:"sv-reuse",init:function(v){var u=h.show(v);d.getJSON(p+"reuse",{confluencePageId:AJS.params.pageId,workingVersionId:Scroll.Versions.Context.user.workingVersion.versionId,since:new Date().getTime()},function(w){s.find("a[href='#sv-reuse'] strong").text("Include Information");s.find("#sv-reuse").html(Scroll.Versions.PageInfo.Templates.reusePane({includingPages:w.includingPages,targetVersion:Scroll.Versions.Context.user.workingVersion}));u.hide()})}},"sv-related":{id:"sv-related",init:function(v){var u=h.show(v);d.getJSON(p+"related",{confluencePageId:AJS.params.pageId,workingVersionId:Scroll.Versions.Context.user.workingVersion.versionId,since:new Date().getTime()},function(w){s.find("a[href='#sv-related'] strong").text("Related Pages");s.find("#sv-related").html(Scroll.Versions.PageInfo.Templates.relatedPages(w));u.hide()})}},"sv-advanced":{id:"sv-advanced",resourceName:"advanced",template:Scroll.Versions.PageInfo.Templates.advancedPane}};var q=null;var s=d("#sv-infopanel");var n=d("#sv-infoline-expander");var t=false;var l=function(){if(Scroll.Versions.Context.user.settings.isDisplayPageInfoPanel){n.addClass("expanded").removeClass("collapsed");t?s.slideDown(100):s.show()}else{n.addClass("collapsed").removeClass("expanded");t?s.slideUp(100):s.hide()}var u=d("#sv-infoline");u.unbind("dblclick.infopanel").bind("dblclick.infopanel",function(z){var w=u.find(".aui-toolbar:first");var y=u.find("#sv-infopanel");var v=u.add(w).add(y);var x=z.target;if(v.is(x)){n.click()}});t=true};var o=function(w){var v=r[w];if(!v){throw Error("Unknown tab '"+w+"'.")}var x=s.find("#"+v.id);if(v.init){v.init(x,v)}else{var u=h.show(x);d.getJSON(p+v.resourceName,{confluencePageId:AJS.params.pageId,since:new Date().getTime()},function(y){s.find("a[href='#"+v.id+"'] strong").text(y.tabTitle);s.find("#"+v.id).html(v.template(y));s.find("#"+v.id+" .compare-with").dropDown("Standard",{alignment:"right"});u.hide()})}q=w};AJS.tabs.setup();AJS.bind("tabSelect",function(v){var u=v&&v.target&&d(v.target).attr("href");if(u){o(u.substring(1));d.cookie("sv-infopanel-tab",u)}});var m=d.cookie("sv-infopanel-tab")||k;d("a[href='"+m+"']").click();Scroll.Versions.Events.bind("contextChange",l);l();d(".sv-infoline #sv-infoline-expander").click(function(u){u.preventDefault();d.getJSON(contextPath+"/rest/scroll-versions/1.0"+"/settings/",function(v){if(n.hasClass("expanded")){n.addClass("collapsed").removeClass("expanded");s.slideUp(100);v.displayPageInfoPanel=false}else{n.addClass("expanded").removeClass("collapsed");s.slideDown(100);v.displayPageInfoPanel=true}}).done(function(v){d.ajax({type:"PUT",contentType:"application/json",url:contextPath+"/rest/scroll-versions/1.0"+"/settings/",data:JSON.stringify(v)})})})};var i=function(){d("#sv-versionchooser:not(.disabled)").dropDown("Standard",{alignment:"right"});d(".ajs-menu-item .trigger").bind("click",function(){if(AJS.dropDown.current){AJS.dropDown.current.hide()}});d("#sv-working-version a.sv-version, a.sv-fixme, #sv-infopanel a.sv-version-link").live("click",function(){var k=d(this).is(".sv-version-current");var l=Scroll.Versions.Context.modules.VersionManagement.hasValidLicense;if(!(l||k)){Scroll.Versions.Dialog.alert({title:"Invalid License",message:Scroll.Versions.Context.modules.VersionManagement.licenseValidationMessageAsHtml},true);return false}return true})};var c=function(){d("#sv-languagechooser:not(.disabled)").dropDown("Standard",{alignment:"right"});d(".ajs-menu-item .trigger").bind("click",function(k){if(AJS.dropDown.current){AJS.dropDown.current.hide()}})};var e=function(){d("#sv-infoline").find(".sv-quicksettings").die("click").live("click",function(){var k=b.getPartial(Scroll.Versions.Context.product.pluginKey,"settings-webresources","settings-dialog");b.createDialogApp("sv-settings",k,{height:440,width:720,className:"sv-dialog"},function(){})})};var f=function(){d(".sv-infoline-icon-dirty a").click(function(k){k.preventDefault()})};var a=function(){if(d("body").is(".contenteditor")){d("#sv-infoline-container").appendTo("#editor-messages");d("#editor-messages .sv-infoline").addClass("aui-message");d(window).trigger("resize")}}})(AJS.$,auiNg,Scroll.Versions._,Scroll.Versions.LoadingBlanket);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
