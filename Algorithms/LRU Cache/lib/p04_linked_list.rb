class Node
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous node to next node
    # and removes self from list.
    self.prev.next = self.next if self.prev
    self.next.prev = self.prev if self.next
    self.next = nil
    self.prev = nil
    self
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |node, j| return node if i == j }
    nil
  end

  def first
    return @head.next unless empty?
    nil
  end

  def last
    return @tail.prev unless empty?
    nil
  end

  def empty?
    @head.next == @tail
  end

  def get(key)
    each {|node| return node.val if node.key == key}
    nil
  end

  def include?(key)
    each {|node| return true if node.key == key }
    return false
  end

  def append(key, val)
    newNode = Node.new(key, val)
    newNode.next = @tail
    newNode.prev = @tail.prev
    @tail.prev = newNode
    newNode.prev.next = newNode
  end

  def update(key, val)
    each do |node| 
      if node.key == key 
        node.val = val 
        return node
      end
    end
  end

  def remove(key)
    each do |node| 
      if node.key == key 
        node.remove 
        return node.val
      end
    end

    nil
  end

  def each
    node = @head.next
    until node == @tail
      yield node
      node = node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, node| acc << "[#{node.key}, #{node.val}]" }.join(", ")
  # end
end
