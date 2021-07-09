import os
import sys
from PySide2 import QtWidgets, QtGui
import webbrowser

# Tray icon scripts based off https://github.com/vfxpipeline/SystemTray/blob/master/tray.py

class SystemTrayIcon(QtWidgets.QSystemTrayIcon):

    def __init__(self, icon, parent=None):
        QtWidgets.QSystemTrayIcon.__init__(self, icon, parent)
        self.setToolTip(f'Alpha-Video - 1.8.1')
        menu = QtWidgets.QMenu(parent)
        open_app = menu.addAction("Open UI")
        open_app.triggered.connect(self.open_ui)
        open_app.setIcon(QtGui.QIcon("icon.png"))

        open_bst = menu.addAction("Start BST")
        open_bst.triggered.connect(self.open_bst_l)
        open_bst.setIcon(QtGui.QIcon("icon.png"))

        exit_ = menu.addAction("Exit")
        exit_.triggered.connect(lambda: sys.exit())
        exit_.setIcon(QtGui.QIcon("icon.png"))

        menu.addSeparator()
        self.setContextMenu(menu)
        self.activated.connect(self.onTrayIconActivated)

    def onTrayIconActivated(self, reason):

        if reason == self.DoubleClick:
            self.open_ui()


    def open_ui(self):

        webbrowser.open('http://localhost:5000', new=2)


    def open_bst_l(self):

        os.system('start start-bst.cmd /s')


def main():
    apps = QtWidgets.QApplication(sys.argv)
    w = QtWidgets.QWidget()
    tray_icon = SystemTrayIcon(QtGui.QIcon("icon.png"), w)
    tray_icon.show()
    tray_icon.showMessage('Alpha Video', 'has started')
    sys.exit(apps.exec_())






if __name__ == '__main__':
    main()
