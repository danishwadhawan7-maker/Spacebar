import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, Utensils } from 'lucide-react';
import { MenuItem } from '../data/mockData';
import { SpacebarLogo } from './SpacebarLogo';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface TabCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: { [key: string]: CartItem };
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
}

export const TabCartDrawer: React.FC<TabCartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const itemsList = Object.values(cart);
  const subtotal = itemsList.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const getWhatsAppOrderUrl = () => {
    let text = `Hello Spacebar Cafe Ludhiana!\nI would like to order the following items to my gaming desk / table:\n\n`;
    itemsList.forEach((ci) => {
      text += `• ${ci.item.name} x ${ci.quantity} (₹${ci.item.price * ci.quantity})\n`;
    });
    text += `\nSubtotal: ₹${subtotal}\nTotal (incl. GST): ₹${total}\n\nPlease prepare our order.`;
    return `https://wa.me/919877950582?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs animate-fade-in flex justify-end">
      <div className="w-full max-w-md bg-white border-l border-slate-200 h-full flex flex-col justify-between shadow-2xl">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <SpacebarLogo size="sm" className="h-8 w-auto" />
            <div>
              <h3 className="text-base font-bold text-slate-950 font-display">Cafe Food Tab</h3>
              <p className="text-[11px] text-slate-500">Order directly to your gaming desk</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {itemsList.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Utensils className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="text-sm font-bold text-slate-800">Your Cafe Tab is Empty</div>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Browse our Gourmet Burgers, Tandoori Tikka, and Loaded Milkshakes to add items to your bill.
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-black rounded-lg cursor-pointer transition-colors"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {itemsList.map(({ item, quantity }) => (
                <div
                  key={item.id}
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex items-center justify-between gap-3 shadow-2xs"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                          item.isVeg ? 'bg-emerald-500' : 'bg-rose-500'
                        }`}
                      />
                      <h4 className="text-xs font-bold text-slate-900 truncate">{item.name}</h4>
                    </div>
                    <div className="text-[11px] font-mono text-slate-600 mt-0.5">
                      ₹{item.price} each · <span className="text-slate-900 font-semibold">Total: ₹{item.price * quantity}</span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg p-1">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-mono font-bold text-slate-900 px-1">
                      {quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 text-slate-500 hover:text-slate-900 rounded hover:bg-slate-100"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="pt-2 text-right">
                <button
                  onClick={onClearCart}
                  className="text-[11px] text-slate-500 hover:text-rose-600 underline cursor-pointer"
                >
                  Clear all items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer with Bill Breakdown */}
        {itemsList.length > 0 && (
          <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Items Subtotal:</span>
                <span className="font-mono text-slate-900 font-semibold">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated GST (5%):</span>
                <span className="font-mono text-slate-900 font-semibold">₹{gst}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-sm font-bold text-slate-950 font-mono">
                <span>Grand Total:</span>
                <span className="text-rose-600 font-black">₹{total}</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold font-display text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Order to Kitchen via WhatsApp</span>
              </a>

              <p className="text-[10px] text-center text-slate-500">
                You can also show this bill at the cafe counter or desk staff when playing.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
