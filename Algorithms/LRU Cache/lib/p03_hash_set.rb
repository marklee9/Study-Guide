require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    resize! if @count == num_buckets
    self[key] << key unless include?(key)
    @count += 1
  end

  def include?(key)
    self[key].each {|el| return true if el == key}
    return false
  end

  def remove(key)
    self[key].delete(key) if include?(key)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    newStore = Array.new(num_buckets * 2) {Array.new}

    @store.each do |bucket|
      bucket.each do |el|
        newStore[el.hash % newStore.length] << el
      end
    end

    @store = newStore
  end
end
