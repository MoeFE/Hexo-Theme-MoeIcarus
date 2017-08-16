# Hexo-Theme-MoeIcarus

> ✨ Make Icarus theme cute!!!

[![Build Status](https://travis-ci.org/MoeFE/Hexo-Theme-MoeIcarus.svg?branch=master)](https://travis-ci.org/MoeFE/Hexo-Theme-MoeIcarus)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Preview

![preview](https://raw.githubusercontent.com/MoeFE/Hexo-Theme-MoeIcarus/master/preview.png)

## Demo

[Live Example](https://quq.cat)

## New features

* Optimizing page title and subtitle display.
* You can configure the use of rounded avatar.
* You can configuration navigation bar to be fixed at the top.
* The profile panel can be configured with bio.
* External resources are loaded using CDN.
* Added the amount of reading of the statistical articles of the [busuanzi](http://busuanzi.ibruce.info/) statistics plugin.
* Added [hitokoto](http://hitokoto.cn/) plugin, Show a lovely word.
* Added [chuncai](https://github.com/shalldie/chuncai) plugin, A lovely Page Wizard, is responsible for selling moe.
* Added [APlayer](https://github.com/MoePlayer/APlayer) plugin, A beautiful HTML5 music player.
* Added [Do-you-like-me](https://github.com/DIYgod/Do-you-like-me) plugin, A very creative point of praise plugin.
* Added the [NProgress](https://github.com/rstacruz/nprogress) plugin to display the page load status.
* The article page randomly adds a lovely background image.
* Add interesting title changes, Creative comes from https://www.anotherhome.net
* Update a very cute mouse style.
* Added some effect.
* Optimize the style of the reference block.
* The mobile side hides the search input box.
* Optimize some of the details.

## Usage

Clone this project into your hexo blog theme directory: 

``` shell
git clone git@github.com:MoeFE/Hexo-Theme-MoeIcarus.git </path/to/themes/MoeIcarus>
```

Edit the site `_config.yml` file:

```yaml
theme: MoeIcarus
```

Merge the _source folder in the theme and the _source folder in the root directory

## Configuration

**Fillet avatar**

eidt `source/css/_variables.styl`

```ini
use-radius-avatar = true
```

**Fixed navigation**

eidt `source/css/_variables.styl`

```ini
use-fixed-nav = true
```

**Add bio**

Edit the theme `_config.yml` file:

```yaml
customize:
  profile:
    bio: I maybe bad,but i feel good.
```

**Enable busuanzi statistics plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  busuanzi_analytics: true # optionis true, false
```

**Enable or Disable chuncai plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  chuncai: true # optionis true, false
```

**Enable or Disable APlayer plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  aplayer:
    enable: true # optionis true, false
    options: { # see doc: https://aplayer.js.org/docs/#/?id=options
      autoplay: true,
      theme: '#ffdfe6',
      music: {
        title: '静かな夜に、君と話そう',
        author: '坂本昌一郎',
        pic: '//avatars1.githubusercontent.com/u/29977599?v=4&s=200',
        url: '//quq.cat/resources/music/坂本昌一郎 - 静かな夜に、君と話そう.mp3'
      }
    }
```

**Enable or Disable Do-you-like-me plugin**

Edit the theme `_config.yml` file:

``` yaml
plugins:
  do_you_like_me: true # optionis true, false
```

## ChangeLog

**2017-08-16**
* Added apple touch icon

**2017-08-15**
* Fixed some bug
* Update a very cute mouse style

**2017-08-14**
* Added some effect
* Added the [chuncai](https://github.com/shalldie/chuncai) plugin, A lovely Page Wizard, is responsible for selling moe
* Added the [NProgress](https://github.com/rstacruz/nprogress) plugin to display the page load status
* Added the [APlayer](https://github.com/MoePlayer/APlayer) plugin, A beautiful HTML5 music player
* Added the [Do-you-like-me](https://github.com/DIYgod/Do-you-like-me) plugin, A very creative point of praise plugin
* Add interesting title changes, Creative comes from https://www.anotherhome.net
* The article page randomly adds a lovely background image

**2017-08-11**
* Added the amount of reading of the statistical articles of the [busuanzi](http://busuanzi.ibruce.info/) statistics plugin
* Added [hitokoto](http://hitokoto.cn/) plugin, Show a lovely word

**2017-08-10**
* External resources are loaded using CDN
* Optimize style details
* Added Profile Bio configuration support
* Added fixed navigation configuration support
* Added rounded avatar configuration support

**2017-08-09**
* Optimizing page title and subtitle display
* Added ESLint and fix code
* Beautify the code

## About

- Give a star if you like , fork or just clone to use , and also you can help me fix bugs and add new feature :)
- If you have any problem or requirement , just open an issue here and i will help you.
- Thanks to [@ppoffice](https://github.com/ppoffice)[/hexo-theme-icarus](https://github.com/ppoffice/hexo-theme-icarus) and [@Hexo](https://hexo.io).

## LICENSE

[MIT](https://github.com/MoeFE/Hexo-Theme-MoeIcarus/blob/master/LICENSE)

