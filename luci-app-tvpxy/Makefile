#
# Copyright (C) 2020 OpenWrt.org
#
# This is free software, licensed under the GNU General Public License v2.
# See /LICENSE for more information.
# 注释信息，可选。

# 所有的可选项，不需要时可以直接不写。

# 加载相关规则文件，必需。
include $(TOPDIR)/rules.mk

# 在 OpenWrt 编译菜单中显示的标题，必需
LUCI_TITLE:=LuCI support for tvpxy
# 依赖关系，可选
LUCI_DEPENDS:=+tvpxy
# 是否要限制硬件平台，可选
LUCI_PKGARCH:=all
# 版本号，可选
PKG_VERSION:=1.0
# 修订版本号，可选
PKG_RELEASE:=1
# 标记日期，可选
PKG_DATE:=20231105


# 加载相关规则文件，必需。
include $(TOPDIR)/feeds/luci/luci.mk

# 下面一行是 Luci 界面专用调用标识，必需，如果缺失会导致不会被加入 OpenWrt 的编译菜单中。
# call BuildPackage - OpenWrt buildroot signature
