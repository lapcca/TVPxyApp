include $(TOPDIR)/rules.mk

PKG_NAME:=tvpxy
PKG_VERSION:=1.0
PKG_RELEASE:=1

PKG_SOURCE_URL:=https://github.com/lapcca/TVPxy.git
PKG_SOURCE_PROTO:=git
PKG_SOURCE_VERSION:=fea90322a25cfa69851cefb4da8bdfb4748127f1
PKG_BUILD_DEPENDS:=golang/host

include $(INCLUDE_DIR)/package.mk
include $(TOPDIR)/feeds/packages/lang/golang/golang-package.mk

define Package/tvpxy
  SECTION:=net
  CATEGORY:=Network
  TITLE:=Core TV Proxy
  DEPENDS:=+golang
endef

define Package/tvpxy/description
  This is a sample Golang TV Proxy application for OpenWRT.
endef

define Build/Prepare
endef

define Build/Compile
  $(MAKE)
endef

define Package/tvpxy/install
  $(INSTALL_DIR) $(1)/usr/bin
  $(INSTALL_BIN) $(PKG_BUILD_DIR)/build/tvpxy $(1)/usr/bin/
  
  $(INSTALL_DIR) $(1)/etc/config
  $(INSTALL_CONF) $(CURDIR)/files/tvpxy_config $(1)/etc/config/tvpxy
  $(INSTALL_DIR) $(1)/etc/init.d
  $(INSTALL_BIN) $(CURDIR)/files/tvpxy_init $(1)/etc/init.d/tvpxy
endef

$(eval $(call BuildPackage,tvpxy))
